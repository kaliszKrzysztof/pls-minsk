import React from 'react';
import Tippy from '@tippyjs/react';
import { TableItem } from 'types';

interface TableProps {
  table: TableItem[];
}

const Table: React.FC<TableProps> = ({ table }) => (
  <div className="overflow-hidden overflow-x-auto lg:overflow-x-hidden">
    <table className="table-auto border w-full">
      <thead>
        <tr>
          <th className="pl-2 pr-1 py-2 text-center align-bottom border" rowSpan={2} aria-label="Miejsce" />
          <th className="p-2 text-cente align-bottom border" rowSpan={2}>
            Drużyna
          </th>
          <th className="p-2 text-center align-bottom border" rowSpan={2}>
            Punkty
          </th>
          <th className="p-2 text-center border" colSpan={3}>
            Mecze
          </th>
          <th className="p-2 text-center border" colSpan={3}>
            Sety
          </th>
        </tr>
        <tr>
          <Tippy content="Rozegrane mecze" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Rozegr.</th>
          </Tippy>
          <Tippy content="Wygrane mecze" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Wygr.</th>
          </Tippy>
          <Tippy content="Przegrane mecze" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Przegr.</th>
          </Tippy>
          <Tippy content="Różnica setów" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Różn.</th>
          </Tippy>
          <Tippy content="Wygrane sety" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Wygr.</th>
          </Tippy>
          <Tippy content="Przegrane sety" touch={false} offset={[0, 0]}>
            <th className="p-2 text-center border">Przegr.</th>
          </Tippy>
        </tr>
      </thead>
      <tbody>
        {table.map(({ team, points, finishedMatches, wonMatches, setDifference, wonSets, lostSets }, index) => (
          <tr key={team.id} className="odd:bg-gray-50 hover:bg-gray-100">
            <td className="pl-2 pr-1 py-2 border text-center">{index + 1}</td>
            <td className="p-2 text-center font-medium border">{team.name}</td>
            <td className="p-2 text-center border">{points}</td>
            <td className="p-2 text-center border">{finishedMatches}</td>
            <td className="p-2 text-center border">{wonMatches}</td>
            <td className="p-2 text-center border">{finishedMatches - wonMatches}</td>
            <td className="p-2 text-center border">{setDifference}</td>
            <td className="p-2 text-center border">{wonSets}</td>
            <td className="p-2 text-center border">{lostSets}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
