import slugify from 'slugify';
import { Match, Queue, Team } from 'types';
import { queue1, queue2, queue3, queue4, queue5, queue6, queue7, queue8, queue9, queue10, queue11 } from './queues';
import {
  kaluszyn,
  pvu,
  halinow,
  ekonom,
  brzoze,
  blackteam,
  watra,
  ceglow,
  fenix,
  afm,
  goldenBoys,
  fabos,
} from './teams';

type CreateMatchParams = {
  host: Team;
  hostScore: number;
  guest: Team;
  guestScore: number;
  queue: Queue;
  isPostponed?: Team;
};

export const createMatch = (params: CreateMatchParams): Match => ({
  id: slugify(`${params.queue.id}-${params.host.id}-${params.guest.id}`, {
    lower: true,
  }),
  host: params.host,
  guest: params.guest,
  hostScore: params.hostScore,
  guestScore: params.guestScore,
  queue: params.queue,
  ...(params.isPostponed && { isPostponed: params.isPostponed }),
});
// queue1
export const q1m1 = createMatch({ host: pvu, guest: kaluszyn, hostScore: 0, guestScore: 3, queue: queue1 });
export const q1m2 = createMatch({ host: ekonom, guest: halinow, hostScore: 3, guestScore: 0, queue: queue1 });
export const q1m3 = createMatch({
  host: fabos,
  guest: brzoze,
  hostScore: 3,
  guestScore: 0,
  queue: queue1,
});
export const q1m4 = createMatch({ host: watra, guest: blackteam, hostScore: 3, guestScore: 0, queue: queue1 });
export const q1m5 = createMatch({
  host: fenix,
  guest: ceglow,
  hostScore: 0,
  guestScore: 0,
  queue: queue1,
  isPostponed: ceglow,
});
export const q1m6 = createMatch({ host: goldenBoys, guest: afm, hostScore: 3, guestScore: 0, queue: queue1 });
// queue2
export const q2m1 = createMatch({
  host: afm,
  guest: pvu,
  hostScore: 0,
  guestScore: 3,
  queue: queue2,
});
export const q2m2 = createMatch({ host: ceglow, guest: goldenBoys, hostScore: 1, guestScore: 3, queue: queue2 });
export const q2m3 = createMatch({ host: blackteam, guest: fenix, hostScore: 1, guestScore: 3, queue: queue2 });
export const q2m4 = createMatch({ host: brzoze, guest: watra, hostScore: 0, guestScore: 3, queue: queue2 });
export const q2m5 = createMatch({ host: halinow, guest: fabos, hostScore: 0, guestScore: 3, queue: queue2 });
export const q2m6 = createMatch({ host: kaluszyn, guest: ekonom, hostScore: 3, guestScore: 0, queue: queue2 });
// queue3
export const q3m1 = createMatch({ host: pvu, guest: ekonom, hostScore: 0, guestScore: 3, queue: queue3 });
export const q3m2 = createMatch({ host: fabos, guest: kaluszyn, hostScore: 3, guestScore: 2, queue: queue3 });
export const q3m3 = createMatch({ host: watra, guest: halinow, hostScore: 0, guestScore: 0, queue: queue3 });
export const q3m4 = createMatch({
  host: fenix,
  guest: brzoze,
  hostScore: 0,
  guestScore: 0,
  queue: queue3,
  isPostponed: fenix,
});
export const q3m5 = createMatch({
  host: goldenBoys,
  guest: blackteam,
  hostScore: 0,
  guestScore: 0,
  queue: queue3,
  isPostponed: blackteam,
});
export const q3m6 = createMatch({ host: afm, guest: ceglow, hostScore: 3, guestScore: 1, queue: queue3 });
// queue4
export const q4m1 = createMatch({ host: ceglow, guest: pvu, hostScore: 0, guestScore: 0, queue: queue4 });
export const q4m2 = createMatch({ host: blackteam, guest: afm, hostScore: 0, guestScore: 0, queue: queue4 });
export const q4m3 = createMatch({ host: brzoze, guest: goldenBoys, hostScore: 0, guestScore: 0, queue: queue4 });
export const q4m4 = createMatch({ host: halinow, guest: fenix, hostScore: 0, guestScore: 0, queue: queue4 });
export const q4m5 = createMatch({ host: kaluszyn, guest: watra, hostScore: 0, guestScore: 0, queue: queue4 });
export const q4m6 = createMatch({ host: ekonom, guest: fabos, hostScore: 0, guestScore: 0, queue: queue4 });
// queue5
export const q5m1 = createMatch({ host: fabos, guest: pvu, hostScore: 0, guestScore: 0, queue: queue5 });
export const q5m2 = createMatch({ host: watra, guest: ekonom, hostScore: 0, guestScore: 0, queue: queue5 });
export const q5m3 = createMatch({ host: fenix, guest: kaluszyn, hostScore: 0, guestScore: 0, queue: queue5 });
export const q5m4 = createMatch({ host: goldenBoys, guest: halinow, hostScore: 0, guestScore: 0, queue: queue5 });
export const q5m5 = createMatch({ host: afm, guest: brzoze, hostScore: 0, guestScore: 0, queue: queue5 });
export const q5m6 = createMatch({ host: ceglow, guest: blackteam, hostScore: 0, guestScore: 0, queue: queue5 });
// queue6
export const q6m1 = createMatch({ host: pvu, guest: blackteam, hostScore: 0, guestScore: 0, queue: queue6 });
export const q6m2 = createMatch({ host: brzoze, guest: ceglow, hostScore: 0, guestScore: 0, queue: queue6 });
export const q6m3 = createMatch({ host: halinow, guest: afm, hostScore: 0, guestScore: 0, queue: queue6 });
export const q6m4 = createMatch({ host: kaluszyn, guest: goldenBoys, hostScore: 0, guestScore: 0, queue: queue6 });
export const q6m5 = createMatch({ host: ekonom, guest: fenix, hostScore: 0, guestScore: 0, queue: queue6 });
export const q6m6 = createMatch({ host: fabos, guest: watra, hostScore: 0, guestScore: 0, queue: queue6 });
// queue7
export const q7m1 = createMatch({ host: watra, guest: pvu, hostScore: 0, guestScore: 0, queue: queue7 });
export const q7m2 = createMatch({ host: fenix, guest: fabos, hostScore: 0, guestScore: 0, queue: queue7 });
export const q7m3 = createMatch({ host: goldenBoys, guest: ekonom, hostScore: 0, guestScore: 0, queue: queue7 });
export const q7m4 = createMatch({ host: afm, guest: kaluszyn, hostScore: 0, guestScore: 0, queue: queue7 });
export const q7m5 = createMatch({ host: ceglow, guest: halinow, hostScore: 0, guestScore: 0, queue: queue7 });
export const q7m6 = createMatch({ host: blackteam, guest: brzoze, hostScore: 0, guestScore: 0, queue: queue7 });
// queue8
export const q8m1 = createMatch({ host: pvu, guest: brzoze, hostScore: 0, guestScore: 0, queue: queue8 });
export const q8m2 = createMatch({ host: halinow, guest: blackteam, hostScore: 0, guestScore: 0, queue: queue8 });
export const q8m3 = createMatch({ host: kaluszyn, guest: ceglow, hostScore: 0, guestScore: 0, queue: queue8 });
export const q8m4 = createMatch({ host: ekonom, guest: afm, hostScore: 0, guestScore: 0, queue: queue8 });
export const q8m5 = createMatch({ host: fabos, guest: goldenBoys, hostScore: 0, guestScore: 0, queue: queue8 });
export const q8m6 = createMatch({ host: watra, guest: fenix, hostScore: 0, guestScore: 0, queue: queue8 });
// queue9
export const q9m1 = createMatch({ host: fenix, guest: pvu, hostScore: 0, guestScore: 0, queue: queue9 });
export const q9m2 = createMatch({ host: goldenBoys, guest: watra, hostScore: 0, guestScore: 0, queue: queue9 });
export const q9m3 = createMatch({ host: afm, guest: fabos, hostScore: 0, guestScore: 0, queue: queue9 });
export const q9m4 = createMatch({ host: ceglow, guest: ekonom, hostScore: 0, guestScore: 0, queue: queue9 });
export const q9m5 = createMatch({ host: blackteam, guest: kaluszyn, hostScore: 0, guestScore: 0, queue: queue9 });
export const q9m6 = createMatch({ host: brzoze, guest: halinow, hostScore: 0, guestScore: 0, queue: queue9 });
// queue10
export const q10m1 = createMatch({ host: pvu, guest: halinow, hostScore: 0, guestScore: 0, queue: queue10 });
export const q10m2 = createMatch({ host: kaluszyn, guest: brzoze, hostScore: 0, guestScore: 0, queue: queue10 });
export const q10m3 = createMatch({ host: ekonom, guest: blackteam, hostScore: 0, guestScore: 0, queue: queue10 });
export const q10m4 = createMatch({ host: fabos, guest: ceglow, hostScore: 0, guestScore: 0, queue: queue10 });
export const q10m5 = createMatch({ host: watra, guest: afm, hostScore: 0, guestScore: 0, queue: queue10 });
export const q10m6 = createMatch({ host: fenix, guest: goldenBoys, hostScore: 0, guestScore: 0, queue: queue10 });
// queue11
export const q11m1 = createMatch({ host: goldenBoys, guest: pvu, hostScore: 3, guestScore: 0, queue: queue11 });
export const q11m2 = createMatch({ host: afm, guest: fenix, hostScore: 0, guestScore: 0, queue: queue11 });
export const q11m3 = createMatch({ host: ceglow, guest: watra, hostScore: 0, guestScore: 0, queue: queue11 });
export const q11m4 = createMatch({ host: blackteam, guest: fabos, hostScore: 0, guestScore: 0, queue: queue11 });
export const q11m5 = createMatch({ host: brzoze, guest: ekonom, hostScore: 0, guestScore: 0, queue: queue11 });
export const q11m6 = createMatch({ host: halinow, guest: kaluszyn, hostScore: 0, guestScore: 0, queue: queue11 });

const matches = [
  q1m1,
  q1m2,
  q1m3,
  q1m4,
  q1m5,
  q1m6,

  q2m1,
  q2m2,
  q2m3,
  q2m4,
  q2m5,
  q2m6,

  q3m1,
  q3m2,
  q3m3,
  q3m4,
  q3m5,
  q3m6,

  q4m1,
  q4m2,
  q4m3,
  q4m4,
  q4m5,
  q4m6,

  q5m1,
  q5m2,
  q5m3,
  q5m4,
  q5m5,
  q5m6,

  q6m1,
  q6m2,
  q6m3,
  q6m4,
  q6m5,
  q6m6,

  q7m1,
  q7m2,
  q7m3,
  q7m4,
  q7m5,
  q7m6,

  q8m1,
  q8m2,
  q8m3,
  q8m4,
  q8m5,
  q8m6,

  q9m1,
  q9m2,
  q9m3,
  q9m4,
  q9m5,
  q9m6,

  q10m1,
  q10m2,
  q10m3,
  q10m4,
  q10m5,
  q10m6,

  q11m1,
  q11m2,
  q11m3,
  q11m4,
  q11m5,
  q11m6,
];

export default matches;
