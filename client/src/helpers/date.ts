import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pl';

dayjs.locale('pl');
dayjs.extend(relativeTime);

export { dayjs };
