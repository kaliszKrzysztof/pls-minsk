import React from 'react';
import { Team as ITeam } from 'types';
import { DEFAULT_TEAM_IMAGE } from 'helpers/image';
import PageHeader from 'components/PageHeader';

interface TeamProps {
  team: ITeam;
}

const Team: React.FC<TeamProps> = ({ team }) => {
  const { name, image, address, phone } = team;
  return (
    <>
      <PageHeader component="h1" text={name} />
      <div className="bg-white p-3 mb-4 shadow-md flex flex-wrap md:flex-nowrap">
        <div className="w-full md:w-auto md:flex-1 md:mr-4">
          <img
            src={image || DEFAULT_TEAM_IMAGE}
            alt={name}
            className="bg-gray-300 h-full w-full object-cover"
            height="302"
            width="604"
          />
        </div>
        <div className="w-full md:w-auto md:flex-1">
          <div className="py-4">
            <p className="mb-2 font-medium text-xl">Kontakt:</p>
            {phone.map((p) => (
              <p className="mb-2 text-lg" key={p.number}>{`${p.name}: ${p.number}`}</p>
            ))}
            <p className="mb-2 font-medium text-xl">Adres:</p>
            <p className="mb-2 text-lg">{address}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
