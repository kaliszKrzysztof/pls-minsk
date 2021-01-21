import { Team } from 'types';
import teams from 'data/teams';

export const getTeamById = (id: string): Team | null => {
  const team: Team | undefined = teams.find((t) => t.id === id);
  return team || null;
};
