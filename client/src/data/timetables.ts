import slugify from 'slugify';
import { Timetable } from 'types';

type CreateTimetableParams = {
  name: string;
};

export const createTimetable = (params: CreateTimetableParams): Timetable => ({
  id: slugify(params.name, {
    lower: true,
  }),
  name: params.name,
});
export const seazon20202021 = createTimetable({ name: 'Sezon 2020/2021' });

const timetables: Timetable[] = [seazon20202021];

export default timetables;
