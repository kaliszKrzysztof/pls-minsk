import {
  Resolver,
  Query,
  Mutation,
  UseMiddleware,
  Arg,
  InputType,
  Field,
  Int,
  FieldResolver,
  Root,
  Ctx,
} from 'type-graphql';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { Team } from '../entities/Team';
import { Match } from '../entities/Match';
import { isAdmin } from '../middleware/isAdmin';
import { MyContext } from '../types';

@InputType()
class TeamInput {
  @Field()
  name!: string;
}

@Resolver(Team)
export class TeamResolver {
  @FieldResolver(() => [Match])
  async matches(@Root() team: Team, @Ctx() { matchesLoader }: MyContext): Promise<Match[]> {
    return matchesLoader.load(team.id);
  }

  @Query(() => [Team])
  async teams(): Promise<Team[]> {
    return Team.find();
  }

  @Query(() => Team, { nullable: true })
  async team(@Arg('id', () => Int) id: number): Promise<Team | undefined> {
    return Team.findOne(id);
  }

  @Mutation(() => Team)
  @UseMiddleware([isAuthenticated, isAdmin])
  async createTeam(@Arg('data') { name }: TeamInput) {
    return Team.create({ name }).save();
  }
}
