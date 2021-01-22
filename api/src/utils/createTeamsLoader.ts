import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { Team } from '../entities/Team';
import { MatchToTeam } from '../entities/MatchToTeam';

const createBatchTeams = (host?: boolean) => async (matchesId: readonly number[]) => {
  const matchTeams = await MatchToTeam.find({
    join: {
      alias: 'teamMatch',
      innerJoinAndSelect: {
        team: 'teamMatch.team',
      },
    },
    where: {
      matchId: In(matchesId as number[]),
      ...(host !== undefined && { host }),
    },
  });

  const matchIdToTeams: { [key: number]: Team[] } = {};

  matchTeams.forEach((matchTeam) => {
    if (matchTeam.matchId in matchIdToTeams) {
      matchIdToTeams[matchTeam.matchId].push(matchTeam.team);
    } else {
      matchIdToTeams[matchTeam.matchId] = [matchTeam.team];
    }
  });

  return matchesId.map((matchId) => matchIdToTeams[matchId] || []);
};

export const createTeamsLoader = () => new DataLoader(createBatchTeams());
export const createHostTeamsLoader = () => new DataLoader(createBatchTeams(true));
export const createGuestTeamsLoader = () => new DataLoader(createBatchTeams(false));
