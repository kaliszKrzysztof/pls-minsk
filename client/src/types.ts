export interface Timetable {
  id: string;
  name: string;
}

export interface Round {
  id: string;
  timetable: Timetable;
  name: string;
}

export interface Queue {
  id: string;
  round: Round;
  number: number;
  date: string;
}

export interface Match {
  id: string;
  host: Team;
  hostScore: number;
  guest: Team;
  guestScore: number;
  queue: Queue;
  isPostponed?: Team;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  image?: string;
  phone: { name: string; number: string }[];
  address: string;
}

export interface TableItem {
  team: Team;
  finishedMatches: number;
  points: number;
  wonMatches: number;
  setDifference: number;
  wonSets: number;
  lostSets: number;
}
