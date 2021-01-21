import slugify from 'slugify';
import { Queue, Round } from 'types';
import { parse } from 'helpers/date';
import { firstRound } from './rounds';

type CreateQueueParams = {
  number: number;
  round: Round;
  date: string;
};

export const createQueue = (params: CreateQueueParams): Queue => ({
  id: slugify(`${params.round.id}-${params.number}`, {
    lower: true,
  }),
  number: params.number,
  round: params.round,
  date: params.date,
});

export const queue1 = createQueue({
  number: 1,
  round: firstRound,
  date: parse('2020-10-02T20:00:00.000Z').toISOString(),
});
export const queue2 = createQueue({
  number: 2,
  round: firstRound,
  date: parse('2020-10-09T20:00:00.000Z').toISOString(),
});
export const queue3 = createQueue({
  number: 3,
  round: firstRound,
  date: parse('2020-10-23T20:00:00.000Z').toISOString(),
});
export const queue4 = createQueue({
  number: 4,
  round: firstRound,
  date: parse('2020-10-30T20:00:00.000Z').toISOString(),
});
export const queue5 = createQueue({
  number: 5,
  round: firstRound,
  date: parse('2020-11-13T20:00:00.000Z').toISOString(),
});
export const queue6 = createQueue({
  number: 6,
  round: firstRound,
  date: parse('2020-11-20T20:00:00.000Z').toISOString(),
});
export const queue7 = createQueue({
  number: 7,
  round: firstRound,
  date: parse('2020-11-27T20:00:00.000Z').toISOString(),
});
export const queue8 = createQueue({
  number: 8,
  round: firstRound,
  date: parse('2020-12-11T20:00:00.000Z').toISOString(),
});
export const queue9 = createQueue({
  number: 9,
  round: firstRound,
  date: parse('2020-12-18T20:00:00.000Z').toISOString(),
});
export const queue10 = createQueue({
  number: 10,
  round: firstRound,
  date: parse('2021-01-22T20:00:00.000Z').toISOString(),
});
export const queue11 = createQueue({
  number: 11,
  round: firstRound,
  date: parse('2021-01-29T20:00:00.000Z').toISOString(),
});

export default [queue1, queue2, queue3, queue4, queue5, queue6, queue7, queue8, queue9, queue10, queue11];
