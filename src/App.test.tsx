import React from 'react';
import { render } from '@testing-library/react';
import waitForExpect from 'wait-for-expect'
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("it works with promises", async () => {
  let numberToChange = 10;
  const randomTimeout = Math.floor(Math.random() * 300);

  setTimeout(() => {
    numberToChange = 100;
  }, randomTimeout);

  const sleep = (ms: number) =>
    new Promise(resolve => setTimeout(() => resolve(), ms));

  await waitForExpect(async () => {
    await sleep(10);
    expect(numberToChange).toEqual(100);
  });
});
