import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react';
import teams from 'data/teams';
import { ParsedUrlQuery } from 'querystring';
import { Match, Team as ITeam } from 'types';
import { getTeamById } from 'helpers/team';
import matchesData from 'data/matches';
import Team from 'components/Team';
import Matches from 'components/Matches';
import PageHeader from 'components/PageHeader';
import { getMatchesByTeam, getTeamPostponedMatches } from 'helpers/match';
import Container from 'components/Container';

interface TeamProps {
  team: ITeam;
  matches: Match[];
  postponedMatches: Match[];
}

const TeamPage: NextPage<TeamProps> = ({ team, matches, postponedMatches }) => (
  <Container component="main" className="py-12">
    <Team team={team} />
    {matches.length > 0 && (
      <>
        <PageHeader component="h2" text={`Mecze (przełożonych:  ${postponedMatches.length})`} />
        <Matches matches={matches} />
      </>
    )}
  </Container>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = teams.map((team) => ({ params: { id: team.id } }));
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<TeamProps, Params> = async (context) => {
  const params = context.params as Params;
  const team = getTeamById(params.id);
  const matches = getMatchesByTeam(params.id, matchesData);
  const postponedMatches = getTeamPostponedMatches(params.id, matchesData);

  if (!team) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      team,
      matches,
      postponedMatches,
    },
  };
};

export default TeamPage;
