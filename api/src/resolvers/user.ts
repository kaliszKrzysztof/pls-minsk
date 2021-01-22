import { Arg, Ctx, Field, FieldResolver, InputType, Mutation, ObjectType, Query, Resolver, Root } from 'type-graphql';
import argon2 from 'argon2';
import { v4 } from 'uuid';
import { AUTH_COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../constants';
import { MyContext } from '../types';
import { Role, User } from '../entities/User';
import { sendEmail } from '../utils/sendEmail';

@InputType()
class UsernamePasswordInput {
  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req }: MyContext): string {
    if (req.session.userId === user.id) {
      return user.email;
    }
    return '';
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, req }: MyContext,
  ): Promise<UserResponse> {
    const redisTokenKey = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(redisTokenKey);
    if (!userId) {
      return {
        errors: [
          {
            field: 'token',
            message: 'Token is expired',
          },
        ],
      };
    }
    const parsedId = parseInt(userId, 10);
    const user = await User.findOne(parsedId);

    if (!user) {
      return {
        errors: [
          {
            field: 'token',
            message: 'Token is expired',
          },
        ],
      };
    }

    const hashedPassword = await argon2.hash(newPassword);
    await redis.del(redisTokenKey);
    await User.update({ id: parsedId }, { password: hashedPassword });
    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  async forgotPassword(@Arg('email') email: string, @Ctx() { redis }: MyContext) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return true;
    }

    const token = v4();
    await redis.set(`${FORGET_PASSWORD_PREFIX}${token}`, user.id, 'ex', 1000 * 60 * 60 * 24);

    const link = `<a href="http://localhost:3000/change-password/${token}">Reset password</a>`;
    await sendEmail(email, link);
    console.log(link);
    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    const { userId } = req.session;
    if (!userId) {
      return null;
    }
    const user = await User.findOne(userId);
    return user;
  }

  @Mutation(() => UserResponse)
  async createAdminUser(): Promise<UserResponse> {
    const hashedPassword = await argon2.hash('admin');
    const user = User.create({ username: 'admin', email: 'admin', password: hashedPassword, roles: [Role.ADMIN] });
    console.log(user);
    try {
      await user.save();
    } catch (err) {
      return {
        errors: [
          {
            field: 'username',
            message: 'User already exists',
          },
        ],
      };
    }
    return { user };
  }

  @Mutation(() => UserResponse)
  async register(@Arg('data') data: UsernamePasswordInput): Promise<UserResponse> {
    const hashedPassword = await argon2.hash(data.password);
    const user = User.create({ username: data.username, email: data.email, password: hashedPassword });
    try {
      await user.save();
    } catch (err) {
      return {
        errors: [
          {
            field: 'username',
            message: 'User already exists',
          },
        ],
      };
    }
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg('usernameOrEmail') usernameOrEmail: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext,
  ): Promise<UserResponse> {
    const user = await User.findOne({
      where: { [usernameOrEmail.includes('@') ? 'email' : 'username']: usernameOrEmail },
    });
    if (!user) {
      return {
        errors: [
          {
            field: 'usernameOrEmail',
            message: "Username or email doesn't exists",
          },
        ],
      };
    }
    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return {
        errors: [
          {
            field: 'password',
            message: 'Invalid password',
          },
        ],
      };
    }

    req.session.userId = user.id;

    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        if (err) {
          resolve(false);
          return;
        }
        res.clearCookie(AUTH_COOKIE_NAME);
        resolve(true);
      }),
    );
  }
}
