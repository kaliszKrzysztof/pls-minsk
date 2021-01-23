import { parse } from 'helpers/date';
import { createMatch } from './matches';
import { createTeam } from './teams';
import { createQueue } from './queues';
import { createRound } from './rounds';
import { createTimetable } from './timetables';

export const team1 = createTeam({ name: 'team1', address: '1234', phone: [{ name: 'Test', number: 'test' }] });
export const team2 = createTeam({ name: 'team2', address: '1234', phone: [{ name: 'Test', number: 'test' }] });
export const team3 = createTeam({ name: 'team3', address: '1234', phone: [{ name: 'Test', number: 'test' }] });
export const team4 = createTeam({ name: 'team4', address: '1234', phone: [{ name: 'Test', number: 'test' }] });
export const teamWithoutMatch = createTeam({
  name: 'teamWithoutMatch',
  address: '1234',
  phone: [{ name: 'Test', number: 'test' }],
});
export const timetable = createTimetable({ name: 'Timetable' });
export const round = createRound({ name: 'Round', timetable });
export const queue1 = createQueue({ number: 1, round, date: parse('2020-10-02T20:00:00.000Z').toISOString() });
export const queue2 = createQueue({ number: 2, round, date: parse('2020-10-09T20:00:00.000Z').toISOString() });
export const queueWithoutMatches = createQueue({
  number: 100,
  round,
  date: parse('2020-10-09T20:00:00.000Z').toISOString(),
});
const now = new Date();
const oneHour = 60 * 60 * 1000;
export const queueWithCurrentDate = createQueue({
  round,
  date: new Date(now.getTime() + oneHour).toISOString(),
  number: 10,
});

export const match11 = createMatch({ host: team1, guest: team2, guestScore: 3, hostScore: 1, queue: queue1 });
export const match12 = createMatch({ host: team3, guest: team4, guestScore: 1, hostScore: 3, queue: queue1 });

export const match21 = createMatch({ host: team4, guest: team1, guestScore: 2, hostScore: 3, queue: queue2 });
export const match22 = createMatch({
  host: team2,
  guest: team3,
  guestScore: 0,
  hostScore: 0,
  queue: queue2,
  isPostponed: team3,
});
