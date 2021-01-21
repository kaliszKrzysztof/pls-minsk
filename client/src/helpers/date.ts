import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/pl';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale('pl');
dayjs.extend(relativeTime);

console.log(dayjs.tz.guess());

const parse = (input: any) => dayjs(input).tz('Europe/Warsaw');

export { parse };
