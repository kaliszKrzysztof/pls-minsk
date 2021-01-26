import React from 'react';
import { render } from '@testing-library/react';
import { match11, match22 } from 'data/testData';
import { parse } from 'helpers/date';
import MatchListItem from './MatchListItem';

describe('MatchListItem component', () => {
  it('renders without crashing', () => {
    render(<MatchListItem match={match11} />);
  });

  it('displays base match data', () => {
    const { getByTestId } = render(<MatchListItem match={match11} />);
    expect(getByTestId('host-name')).toHaveTextContent(match11.host.name);
    expect(getByTestId('host-score')).toHaveTextContent(match11.hostScore.toString());
    expect(getByTestId('guest-name')).toHaveTextContent(match11.guest.name);
    expect(getByTestId('guest-score')).toHaveTextContent(match11.guestScore.toString());
  });

  it('displays queue info', () => {
    const { getByTestId } = render(<MatchListItem match={match11} displayDate />);
    expect(getByTestId('queue-number')).toHaveTextContent(`Kolejka ${match11.queue.number}`);
    expect(getByTestId('queue-date')).toHaveTextContent(parse(match11.queue.date).format('DD.MM.YYYY'));
  });

  it("doesn't displays queue info", () => {
    const { queryByTestId } = render(<MatchListItem match={match11} />);
    expect(queryByTestId('queue-number')).not.toBeInTheDocument();
    expect(queryByTestId('queue-date')).not.toBeInTheDocument();
  });

  it('displays postponed info', () => {
    const { queryByTestId } = render(<MatchListItem match={match22} />);
    expect(queryByTestId('postponed-info')).toHaveTextContent(
      `Mecz został przełożony na prośbę drużyny ${match22.isPostponed?.name}`,
    );
  });

  it("doesn't displays postponed info", () => {
    const { queryByTestId } = render(<MatchListItem match={match11} />);
    expect(queryByTestId('postponed-info')).not.toBeInTheDocument();
  });
});
