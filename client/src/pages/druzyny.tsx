import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Team } from 'types';
import teamsData from 'data/teams';
import Container from 'components/Container';
import TeamListItem from 'components/TeamListItem';
import PageHeader from 'components/PageHeader';
import { decorateWithHost, generatePath } from 'helpers/generatePath';
import { createOpenGraph } from 'helpers/openGraph';
import { NextSeo } from 'next-seo';

interface TeamsProps {
  teams: Team[];
}

const Teams: NextPage<TeamsProps> = ({ teams }) => {
  const selfHref = decorateWithHost(generatePath({ type: 'team' }));

  return (
    <>
      <NextSeo title="Drużyny" canonical={selfHref} openGraph={createOpenGraph({ title: 'Drużyny', url: selfHref })} />
      <Container component="main" className="py-12">
        <PageHeader component="h1" text="Drużyny" />
        <div className="pb-6 grid grid-cols-12 gap-6">
          {teams.map((team) => (
            <TeamListItem key={team.id} team={team} className="col-span-12 md:col-span-6 lg:col-span-4" />
          ))}
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    teams: teamsData,
  },
});

export default Teams;
