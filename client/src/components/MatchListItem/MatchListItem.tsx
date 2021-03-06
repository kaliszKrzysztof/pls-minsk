import React from 'react';
import clsx from 'clsx';
import { Match } from 'types';
import { parse } from 'helpers/date';
import Link from 'next/link';
import { generatePath } from 'helpers/generatePath';

interface MatchListItemProps {
  match: Match;
  className?: string;
  displayDate?: boolean;
}

const MatchListItem: React.FC<MatchListItemProps> = ({ match, className = '', displayDate }) => {
  const { host, hostScore, guest, guestScore, isPostponed, queue } = match;
  return (
    <div className={`border-b overflow-hidden ${className} ${isPostponed ? 'bg-gray-300' : ''}`}>
      <div>
        {displayDate && (
          <div className="w-full text-center">
            <p data-testid="queue-number" className="text-lg md:text-xl">
              Kolejka {queue.number}
            </p>
            <p data-testid="queue-date" className="text-lg md:text-xl">
              {parse(queue.date).format('DD.MM.YYYY')}
            </p>
          </div>
        )}
        <div className="flex-1 flex flex-wrap items-center justify-center py-2">
          <h2 data-testid="host-name" className="text-lg sm:text-xl md:text-2xl flex-1 text-right break-words">
            <Link href={generatePath({ type: 'team', slug: host.id })}>
              <a>{host.name}</a>
            </Link>
          </h2>
          <div className="text-center px-3 md:px-8 text-gray-400">
            <span
              data-testid="host-score"
              className={clsx('text-4xl md:text-6xl font-medium', {
                'text-red-600': guestScore === 3,
                'text-green-600': hostScore === 3,
              })}
            >
              {hostScore}
            </span>
            <span className="text-4xl md:text-6xl font-medium mx-1">:</span>
            <span
              data-testid="guest-score"
              className={clsx('text-4xl md:text-6xl font-medium', {
                'text-red-600': hostScore === 3,
                'text-green-600': guestScore === 3,
              })}
            >
              {guestScore}
            </span>
          </div>
          <h2 data-testid="guest-name" className="text-lg sm:text-xl md:text-2xl flex-1 break-words">
            <Link href={generatePath({ type: 'team', slug: guest.id })}>
              <a>{guest.name}</a>
            </Link>
          </h2>
          {!!isPostponed && (
            <div className="w-full">
              <h3 data-testid="postponed-info" className="text-center pt-4">
                Mecz został przełożony na prośbę drużyny
                <span>&nbsp;</span>
                <Link href={generatePath({ type: 'team', slug: isPostponed.id })}>
                  <a className="font-medium">{isPostponed.name}</a>
                </Link>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchListItem;
