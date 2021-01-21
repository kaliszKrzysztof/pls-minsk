import slugify from 'slugify';
import { Round, Timetable } from 'types';
import { seazon20202021 } from './timetables';

type CreateRoundParams = {
  name: string;
  timetable: Timetable;
};

export const createRound = (params: CreateRoundParams): Round => ({
  id: slugify(`${params.timetable.id}-${params.name}`, {
    lower: true,
  }),
  name: params.name,
  timetable: params.timetable,
});
export const firstRound = createRound({ name: 'Faza zasadnicza', timetable: seazon20202021 });

const rounds = [firstRound];

export default rounds;
