import React from 'react';
import MatchListItem from 'components/MatchListItem';
import { Match } from 'types';

interface MatchesProps {
  matches: Match[];
}

const Matches: React.FC<MatchesProps> = ({ matches }) => (
  <div className="bg-white shadow-md">
    {matches.map((match) => (
      <MatchListItem displayDate className="px-4 py-4" key={match.id} match={match} />
    ))}
  </div>
);

export default Matches;
