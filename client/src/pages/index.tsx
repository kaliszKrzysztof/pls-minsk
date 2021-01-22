import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Match } from 'types';
import matchesData from 'data/matches';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import MatchListItem from 'components/MatchListItem';
import { getPostponedMatches } from 'helpers/match';
import { createOpenGraph } from 'helpers/openGraph';
import { decorateWithHost, generatePath } from 'helpers/generatePath';

interface HomepageProps {
  postponedMatches: Match[];
}

const Homepage: NextPage<HomepageProps> = ({ postponedMatches }) => {
  const selfHref = decorateWithHost(generatePath({ type: 'home' }));
  return (
    <>
      <NextSeo
        title="Aktualności"
        canonical={selfHref}
        openGraph={createOpenGraph({ title: 'Aktualności', url: selfHref })}
      />
      <Container component="main" className="py-12">
        <PageHeader component="h1" text="Aktualności" />
        <p className="text-lg text-center mb-4">Nie ma żadnych nowych wpisów</p>
        {postponedMatches.length > 0 && (
          <>
            <PageHeader component="h2" text="Zaległe mecze" />
            <div className="bg-white shadow-md">
              {postponedMatches.map((match) => (
                <MatchListItem className="px-4 py-4" key={match.id} match={match} displayDate />
              ))}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    postponedMatches: getPostponedMatches(matchesData),
  },
});

export default Homepage;
