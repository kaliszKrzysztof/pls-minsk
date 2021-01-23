import {
  match11,
  match12,
  match21,
  match22,
  teamWithoutMatch,
  team1,
  team3,
  queue1,
  queueWithoutMatches,
} from '../data/testData';
import {
  getMatchById,
  getMatchesByQueue,
  getMatchesByTeam,
  getPostponedMatches,
  getTeamPostponedMatches,
} from './match';

const matches = [match11, match12, match21, match22];

describe('match helper', () => {
  describe('getMatchById function', () => {
    it('should return undefined when no match found', () => {
      expect(getMatchById('test', matches)).toBeUndefined();
    });

    it('should return correct match', () => {
      expect(getMatchById(match12.id, matches)).toEqual(match12);
    });
  });

  describe('getMatchesByTeam function', () => {
    it('should return empty array when no matches found', () => {
      expect(getMatchesByTeam(teamWithoutMatch.id, matches)).toEqual([]);
    });

    it('should return all team matches', () => {
      expect(getMatchesByTeam(team1.id, matches)).toHaveLength(2);
    });
  });

  describe('getMatchesByQueue function', () => {
    it('should return empty array when no matches found', () => {
      expect(getMatchesByQueue(queueWithoutMatches.id, matches)).toEqual([]);
    });

    it('should return all matches in queue', () => {
      expect(getMatchesByQueue(queue1.id, matches)).toHaveLength(2);
    });
  });

  describe('getPostponedMatches function', () => {
    it('should return empty array when no postponed matches found', () => {
      expect(getPostponedMatches([match11, match12])).toEqual([]);
    });

    it('should return all postponed matches', () => {
      expect(getPostponedMatches(matches)).toHaveLength(1);
    });
  });

  describe('getTeamPostponedMatches function', () => {
    it('should return empty array when no postponed by team matches found', () => {
      expect(getTeamPostponedMatches(teamWithoutMatch.id, matches)).toEqual([]);
    });

    it('should return all postponed by team matches', () => {
      expect(getTeamPostponedMatches(team3.id, matches)).toHaveLength(1);
    });
  });
});
