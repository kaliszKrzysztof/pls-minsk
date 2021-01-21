import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { generatePath } from 'helpers/generatePath';
import { Queue } from 'types';

interface QueuePickerProps {
  queues: Queue[];
  activeQueue: Queue;
}

const QueuePicker: React.FC<QueuePickerProps> = ({ queues, activeQueue }) => (
  <div className="bg-white shadow-md flex flex-wrap justify-center mb-4">
    {queues.map((q) => (
      <Link key={q.id} href={`${generatePath({ type: 'match' })}?kolejka=${q.number}`}>
        <a
          className={clsx('w-12 h-12 flex items-center justify-center border border-white', {
            'bg-green-600 text-white': q.id === activeQueue.id,
            'bg-gray-200 focus:bg-gray-300 hover:bg-gray-300': q.id !== activeQueue.id,
          })}
        >
          {q.number}
        </a>
      </Link>
    ))}
  </div>
);

export default QueuePicker;
