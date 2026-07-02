import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';
import { advanceTo, clear } from 'jest-date-mock';

beforeAll(() => {
  // Mock the current date to a fixed value that matches the snapshot
  advanceTo(new Date('2024-01-14'));
});

afterAll(() => {
  // Reset the mocked date after tests
  clear();
});

test('Dashboard renders correctly', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});