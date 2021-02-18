import React from 'react';
import Link from 'next/link';
import { Team } from 'types';
import { generatePath } from 'helpers/generatePath';
import { DEFAULT_TEAM_IMAGE } from 'helpers/image';

interface TeamListItemProps {
  team: Team;
  className?: string;
}

const TeamListItem: React.FC<TeamListItemProps> = ({ team, className }) => {
  const { name, id, image, address } = team;
  return (
    <div className={`bg-white shadow-md ${className}`}>
      <Link href={generatePath({ type: 'team', slug: id })}>
        <a className="block outline-none">
          <div className="h-full max-h-64 bg-gray-300">
            <img
              src={image || DEFAULT_TEAM_IMAGE}
              alt={name}
              className="w-full h-full object-center object-contain"
              height="200"
            />
          </div>
          <div className="p-4">
            <h2 className="font-medium text-lg mb-2">{name}</h2>
            <p>{address}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default TeamListItem;
