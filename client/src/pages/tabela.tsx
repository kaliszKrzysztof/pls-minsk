import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Round, TableItem } from 'types';
import { createTable } from 'helpers/table';
import Container from 'components/Container';
import Table from 'components/Table';
import PageHeader from 'components/PageHeader';
import matches from 'data/matches';
import { firstRound } from 'data/rounds';

interface TableProps {
  table: TableItem[];
  round: Round;
}

const Teams: NextPage<TableProps> = ({ table, round }) => (
  <Container component="main" className="py-12">
    <PageHeader component="h1" text="Tabela" />
    <div className="py-6 px-3 bg-white shadow-md">
      <h2 className="text-2xl font-medium mb-6 text-center">{`${round.name} - klasyfikacja generalna`}</h2>
      <Table table={table} />
    </div>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    round: firstRound,
    table: createTable(matches),
  },
});

export default Teams;
