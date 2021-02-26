import React from "react";
import { render } from '@testing-library/react';
import Counter from './Counter';

// smoke test

test('renders without crashing', function () {
  render(<Counter />)
});