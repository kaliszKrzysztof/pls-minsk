/* eslint-disable implicit-arrow-linebreak */
import { Match } from 'types';

export const getMatchesByTeam = (teamId: string, matches: Match[]): Match[] =>
  matches.filter((match) => [match.host.id, match.guest.id].includes(teamId));

export const getMatchesByQueue = (queueId: string, matches: Match[]): Match[] =>
  matches.filter((match) => match.queue.id === queueId);

export const getMatchById = (matchId: string, matches: Match[]): Match | undefined =>
  matches.find((match) => match.id === matchId);

export const getPostponedMatches = (matches: Match[]): Match[] => matches.filter((match) => match.isPostponed);
