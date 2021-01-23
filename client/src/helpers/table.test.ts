import { calculatePoints, calculateMatchToTableItem, mergeTableItems, createTable } from './table';
import { match11, match12, match21, match22, team1, team2, team3, team4 } from '../data/testData';

describe('table helper', () => {
  describe('calculatePoints function', () => {
    it('should correctly calculate points', () => {
      expect(calculatePoints(3, 0)).toEqual([3, 0]);
      expect(calculatePoints(3, 2)).toEqual([2, 1]);
      expect(calculatePoints(3, 1)).toEqual([3, 0]);
      expect(calculatePoints(0, 0)).toEqual([0, 0]);
      expect(calculatePoints(1, 3)).toEqual([0, 3]);
      expect(calculatePoints(2, 3)).toEqual([1, 2]);
      expect(calculatePoints(0, 3)).toEqual([0, 3]);
    });
  });

  describe('calculateMatchToTableItem function', () => {
    it('should return empty matchItems for both guest and host', () => {
      expect(calculateMatchToTableItem(match22)).toEqual([
        {
          team: match22.host,
          finishedMatches: 0,
          points: 0,
          wonMatches: 0,
          setDifference: 0,
          lostSets: 0,
          wonSets: 0,
        },
        {
          team: match22.guest,
          finishedMatches: 0,
          points: 0,
          wonMatches: 0,
          setDifference: 0,
          lostSets: 0,
          wonSets: 0,
        },
      ]);
    });

    it('should return correct matchItems', () => {
      expect(calculateMatchToTableItem(match21)).toEqual([
        {
          team: match21.host,
          finishedMatches: 1,
          points: 2,
          wonMatches: 1,
          setDifference: 1,
          lostSets: 2,
          wonSets: 3,
        },
        {
          team: match21.guest,
          finishedMatches: 1,
          points: 1,
          wonMatches: 0,
          setDifference: -1,
          lostSets: 3,
          wonSets: 2,
        },
      ]);

      expect(calculateMatchToTableItem(match11)).toEqual([
        {
          team: match11.host,
          finishedMatches: 1,
          points: 0,
          wonMatches: 0,
          setDifference: -2,
          lostSets: 3,
          wonSets: 1,
        },
        {
          team: match11.guest,
          finishedMatches: 1,
          points: 3,
          wonMatches: 1,
          setDifference: 2,
          lostSets: 1,
          wonSets: 3,
        },
      ]);
    });
  });

  describe('mergeTableItems function', () => {
    it('should merge items', () => {
      const emptyTableItem = {
        team: match22.host,
        finishedMatches: 0,
        points: 0,
        wonMatches: 0,
        setDifference: 0,
        lostSets: 0,
        wonSets: 0,
      };
      const wonMatchTableItem = {
        team: match22.host,
        finishedMatches: 1,
        points: 3,
        wonMatches: 1,
        setDifference: 0,
        lostSets: 0,
        wonSets: 3,
      };
      const lostMatchTableItem = {
        team: match22.host,
        finishedMatches: 1,
        points: 0,
        wonMatches: 0,
        setDifference: -3,
        lostSets: 3,
        wonSets: 0,
      };
      const currentTableItem = {
        team: match22.host,
        finishedMatches: 10,
        points: 2,
        wonMatches: 1,
        setDifference: 2,
        lostSets: 2,
        wonSets: 3,
      };

      expect(mergeTableItems(currentTableItem, emptyTableItem)).toEqual(currentTableItem);
      expect(mergeTableItems(currentTableItem, wonMatchTableItem)).toEqual({
        team: match22.host,
        finishedMatches: currentTableItem.finishedMatches + wonMatchTableItem.finishedMatches,
        points: currentTableItem.points + wonMatchTableItem.points,
        wonMatches: currentTableItem.wonMatches + wonMatchTableItem.wonMatches,
        setDifference: currentTableItem.setDifference + wonMatchTableItem.setDifference,
        lostSets: currentTableItem.lostSets + wonMatchTableItem.lostSets,
        wonSets: currentTableItem.wonSets + wonMatchTableItem.wonSets,
      });
      expect(mergeTableItems(currentTableItem, lostMatchTableItem)).toEqual({
        team: match22.host,
        finishedMatches: currentTableItem.finishedMatches + lostMatchTableItem.finishedMatches,
        points: currentTableItem.points + lostMatchTableItem.points,
        wonMatches: currentTableItem.wonMatches + lostMatchTableItem.wonMatches,
        setDifference: currentTableItem.setDifference + lostMatchTableItem.setDifference,
        lostSets: currentTableItem.lostSets + lostMatchTableItem.lostSets,
        wonSets: currentTableItem.wonSets + lostMatchTableItem.wonSets,
      });
    });
  });

  describe('createTable function', () => {
    it('should return null if no matches provided', () => {
      expect(createTable([])).toBeNull();
    });
    it('should create correct table', () => {
      expect(createTable([match11, match12, match21, match22])).toEqual([
        {
          team: team3,
          points: 3,
          finishedMatches: 1,
          wonMatches: 1,
          setDifference: 2,
          wonSets: 3,
          lostSets: 1,
        },
        {
          team: team2,
          points: 3,
          finishedMatches: 1,
          wonMatches: 1,
          setDifference: 2,
          wonSets: 3,
          lostSets: 1,
        },
        {
          team: team4,
          points: 2,
          finishedMatches: 2,
          wonMatches: 1,
          setDifference: -1,
          wonSets: 4,
          lostSets: 5,
        },
        {
          team: team1,
          points: 1,
          finishedMatches: 2,
          wonMatches: 0,
          setDifference: -3,
          wonSets: 3,
          lostSets: 6,
        },
      ]);
    });
  });
});
