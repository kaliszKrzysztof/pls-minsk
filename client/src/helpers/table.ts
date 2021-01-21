import sortBy from 'lodash/sortBy';
import { Match, TableItem } from 'types';

const calculatePoints = (hostScore: number, guestScore: number): [hostPoints: number, guestPoins: number] => {
  if (hostScore > guestScore) {
    return guestScore === 2 ? [2, 1] : [3, 0];
  }
  if (guestScore > hostScore) {
    return hostScore === 2 ? [1, 2] : [0, 3];
  }
  return [0, 0];
};

const calculateMatchToTableItem = (match: Match): [hostTableItem: TableItem, guestTableItem: TableItem] => {
  const { host, hostScore, guest, guestScore } = match;
  const [hostPoints, guestPoins] = calculatePoints(hostScore, guestScore);
  if (hostPoints === guestPoins) {
    return [
      {
        team: host,
        finishedMatches: 0,
        points: 0,
        wonMatches: 0,
        setDifference: 0,
        lostSets: 0,
        wonSets: 0,
      },
      {
        team: guest,
        finishedMatches: 0,
        points: 0,
        wonMatches: 0,
        setDifference: 0,
        lostSets: 0,
        wonSets: 0,
      },
    ];
  }
  return [
    {
      team: host,
      finishedMatches: 1,
      points: hostPoints,
      wonMatches: Number(hostPoints > guestPoins),
      setDifference: hostScore - guestScore,
      lostSets: guestScore,
      wonSets: hostScore,
    },
    {
      team: guest,
      finishedMatches: 1,
      points: guestPoins,
      wonMatches: Number(guestPoins > hostPoints),
      setDifference: guestScore - hostScore,
      lostSets: hostScore,
      wonSets: guestScore,
    },
  ];
};

const mergeTableItems = (currentTableItem: TableItem, newTableItem: TableItem): TableItem => ({
  team: currentTableItem.team,
  points: currentTableItem.points + newTableItem.points,
  finishedMatches: currentTableItem.finishedMatches + newTableItem.finishedMatches,
  wonMatches: currentTableItem.wonMatches + newTableItem.wonMatches,
  setDifference: currentTableItem.setDifference + newTableItem.setDifference,
  wonSets: currentTableItem.wonSets + newTableItem.wonSets,
  lostSets: currentTableItem.lostSets + newTableItem.lostSets,
});

export const createTable = (matches: Match[]): TableItem[] => {
  const tableItems: { [key: string]: TableItem } = {};

  matches.forEach((match) => {
    const [hostTableItem, guestTableItem] = calculateMatchToTableItem(match);
    const hostId = hostTableItem.team.id;
    const guestId = guestTableItem.team.id;
    if (tableItems[hostId]) {
      tableItems[hostId] = mergeTableItems(tableItems[hostId], hostTableItem);
    } else {
      tableItems[hostId] = hostTableItem;
    }
    if (tableItems[guestId]) {
      tableItems[guestId] = mergeTableItems(tableItems[guestId], hostTableItem);
    } else {
      tableItems[guestId] = guestTableItem;
    }
  });

  const table = Object.keys(tableItems).map((key) => tableItems[key]);

  return sortBy(table, ['points']).reverse();
};
