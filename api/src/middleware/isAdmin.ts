import { MiddlewareFn } from 'type-graphql';
import { User, Role } from '../entities/User';
import { MyContext } from '../types';

export const isAdmin: MiddlewareFn<MyContext> = async ({ context }, next) => {
  const { userId } = context.req.session;
  if (!userId) {
    throw new Error('not authenticated');
  }
  const user = await User.findOne(userId);
  if (!user || !user.roles.includes(Role.ADMIN)) {
    throw new Error('invalid user');
  }

  return next();
};
