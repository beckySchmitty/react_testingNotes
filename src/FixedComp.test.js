import React from "react";
import { render } from '@testing-library/react';
import FixedComponent from './FixedComp';

// smoke test

test('renders without crashing', function () {
  render(<FixedComponent />)
});

test('it matches snapshot', () => {
    const {asFragment} = render(<FixedComponent />)
    expect(asFragment).toMatchSnapshot();
})