import DataLoader from 'dataloader';
import { In } from 'typeorm';
import { Match } from '../entities/Match';
import { MatchToTeam } from '../entities/MatchToTeam';

const batchMatches = async (teamsId: readonly number[]) => {
  const teamMatches = await MatchToTeam.find({
    join: {
      alias: 'teamMatch',
      innerJoinAndSelect: {
        match: 'teamMatch.match',
      },
    },
    where: {
      teamId: In(teamsId as number[]),
    },
  });

  const teamIdToMatches: { [key: number]: Match[] } = {};

  teamMatches.forEach((teamMatch) => {
    if (teamMatch.teamId in teamIdToMatches) {
      teamIdToMatches[teamMatch.teamId].push(teamMatch.match);
    } else {
      teamIdToMatches[teamMatch.teamId] = [teamMatch.match];
    }
  });

  return teamsId.map((teamId) => teamIdToMatches[teamId] || []);
};

export const createMatchesLoader = () => new DataLoader(batchMatches);
