import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader component', () => {
  it('rendes without crash', () => {
    render(<PageHeader text="Page Header" />);
  });

  it('rendes header with provided html element', () => {
    const { getByTestId, rerender } = render(<PageHeader text="Page Header" />);
    expect(getByTestId('page-header').nodeName).toEqual('H1');
    expect(getByTestId('page-header').textContent).toEqual('Page Header');
    rerender(<PageHeader text="Page Header" component="h2" />);
    expect(getByTestId('page-header').nodeName).toEqual('H2');
    expect(getByTestId('page-header').textContent).toEqual('Page Header');
    rerender(<PageHeader text="Page Header" component="h3" />);
    expect(getByTestId('page-header').nodeName).toEqual('H3');
    expect(getByTestId('page-header').textContent).toEqual('Page Header');
  });
});
