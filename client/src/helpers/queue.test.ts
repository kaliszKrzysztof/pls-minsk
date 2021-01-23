import { getCurrentQueue, getQueueByNumber } from './queue';
import { queue1, queue2, queueWithCurrentDate } from '../data/testData';

describe('queue helper', () => {
  describe('getCurrentQueue function', () => {
    it('should return closest to current date queue', () => {
      expect(getCurrentQueue([queue1, queue2, queueWithCurrentDate])).toEqual(queueWithCurrentDate);
    });
    it('should return first queue if cant find closest', () => {
      expect(getCurrentQueue([queue1, queue2])).toEqual(queue1);
    });
    it('should return null if no queues provided', () => {
      expect(getCurrentQueue([])).toBeNull();
    });
  });

  describe('getQueueByNumber function', () => {
    it('should return undefined when no queue found', () => {
      expect(getQueueByNumber(10, [queue1, queue2])).toBeUndefined();
    });

    it('should return correct queue', () => {
      expect(getQueueByNumber(1, [queue1, queue2])).toEqual(queue1);
    });
  });
});
