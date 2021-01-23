import { getTeamById } from './team';
import { team1, team2 } from '../data/testData';

describe('team helper', () => {
  describe('getTeamById function', () => {
    it('should return null if no team found', () => {
      expect(getTeamById('no-existing-team', [team1, team2])).toBeNull();
      expect(getTeamById('no-existing-team', [])).toBeNull();
    });

    it('should return team', () => {
      expect(getTeamById(team1.id, [team1, team2])).toEqual(team1);
    });
  });
});
