import { Resolver, Query, Mutation, UseMiddleware, Arg, Int, FieldResolver, Root, Ctx } from 'type-graphql';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { MatchToTeam } from '../entities/MatchToTeam';
import { Match } from '../entities/Match';
import { Team } from '../entities/Team';
import { isAdmin } from '../middleware/isAdmin';
import { MyContext } from '../types';

@Resolver(Match)
export class MatchResolver {
  @FieldResolver(() => Team, { nullable: true })
  async host(@Root() match: Match, @Ctx() { hostTeamsLoader }: MyContext): Promise<Team | null> {
    const hostTeam = await hostTeamsLoader.load(match.id);
    if (hostTeam) {
      return hostTeam[0];
    }
    return null;
  }

  @FieldResolver(() => Team, { nullable: true })
  async guest(@Root() match: Match, @Ctx() { guestTeamsLoader }: MyContext): Promise<Team | null> {
    const guestTeam = await guestTeamsLoader.load(match.id);
    if (guestTeam) {
      return guestTeam[0];
    }
    return null;
  }

  @FieldResolver(() => [Team])
  async teams(@Root() match: Match, @Ctx() { teamsLoader }: MyContext): Promise<Team[]> {
    return teamsLoader.load(match.id);
  }

  @Query(() => [Match])
  async matches(): Promise<Match[]> {
    return Match.find();
  }

  @Query(() => Match, { nullable: true })
  async match(@Arg('id', () => Int) id: number): Promise<Match | undefined> {
    return Match.findOne(id);
  }

  @Mutation(() => Match)
  @UseMiddleware([isAuthenticated, isAdmin])
  async createMatch(@Arg('hostId', () => Int) hostId: number, @Arg('guestId', () => Int) guestId: number) {
    const match = await Match.create().save();
    await MatchToTeam.create({ matchId: match.id, teamId: hostId, host: true }).save();
    await MatchToTeam.create({ matchId: match.id, teamId: guestId, host: false }).save();
    return match;
  }
}
