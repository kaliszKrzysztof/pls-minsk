import { Team } from 'types';

export const getTeamById = (id: string, teams: Team[]): Team | null => {
  const team: Team | undefined = teams.find((t) => t.id === id);
  return team || null;
};
