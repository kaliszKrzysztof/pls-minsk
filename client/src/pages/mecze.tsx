import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getCurrentQueue, getQueueByNumber } from 'helpers/queue';
import { Match, Queue } from 'types';
import matchesData from 'data/matches';
import queuesData from 'data/queues';
import { parse } from 'helpers/date';
import Container from 'components/Container';
import PageHeader from 'components/PageHeader';
import MatchListItem from 'components/MatchListItem';
import QueuePicker from 'components/QueuePicker';
import { decorateWithHost, generatePath } from 'helpers/generatePath';
import { NextSeo } from 'next-seo';
import { createOpenGraph } from 'helpers/openGraph';

interface MatchesProps {
  matches: Match[];
  queues: Queue[];
  activeQueue: Queue;
}

const Matches: NextPage<MatchesProps> = ({ matches, queues, activeQueue }) => {
  const selfHref = decorateWithHost(generatePath({ type: 'match' }));
  return (
    <>
      <NextSeo title="Mecze" canonical={selfHref} openGraph={createOpenGraph({ title: 'Mecze', url: selfHref })} />
      <Container component="main" className="py-12">
        <PageHeader component="h1" text="Mecze" />
        {activeQueue && (
          <>
            <PageHeader
              component="h2"
              text={`Kolejka ${activeQueue.number} - ${parse(activeQueue.date).format('DD.MM.YYYY')}`}
            />
            <QueuePicker queues={queues} activeQueue={activeQueue} />
            <div className="bg-white shadow-md">
              {matches
                .filter((match) => match.queue.id === activeQueue.id)
                .map((match) => (
                  <MatchListItem className="px-4 py-4" key={match.id} match={match} />
                ))}
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const urlQueue = query.kolejka as string;
  const currentQueue = getCurrentQueue(queuesData);
  let activeQueue = currentQueue;
  if (urlQueue) {
    activeQueue = getQueueByNumber(parseInt(urlQueue, 10), queuesData) || currentQueue;
  }
  return {
    props: {
      matches: matchesData,
      queues: queuesData,
      activeQueue,
    },
  };
};

export default Matches;
