/* eslint-disable implicit-arrow-linebreak */
import { Queue } from 'types';

export const getQueueByNumber = (number: number, queues: Queue[]): Queue | undefined =>
  queues.find((queue) => queue.number === number);

export const getCurrentQueue = (queues: Queue[]): Queue | null => {
  if (queues.length === 0) {
    return null;
  }
  const currentDateTimestamp = new Date().getTime();
  const currentQueue = queues.find((queue) => currentDateTimestamp - new Date(queue.date).getTime() <= 0) || queues[0];
  return currentQueue;
};
