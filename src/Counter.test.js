import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// smoke test

test('renders without crashing', function () {
  render(<Counter />)
});

// test('playing with queries', () => {
//   const {getByText, getAllByText} = render(<Counter />);
//   console.log(getByText("Let's count", {exact: false}))
//   console.log(getAllByText("count", {exact: false}))

// })

test('playing with queries', () => {
  const {getByPlaceholderText} = render(<Counter />);
  console.log(getByPlaceholderText("username"))

})


// debug notes added 
test('btn increments counter', () => {
  const {getByText, debug} = render(<Counter />);
  // debug();
  const h2 = getByText('Current count: 0');
  const btn = getByText('Add');

  fireEvent.click(btn);
  debugger;


  // checks to see if 1 is in the text somewhere
  expect(h2).toHaveTextContent('1');
  expect(h2).not.toHaveTextContent('0');
})