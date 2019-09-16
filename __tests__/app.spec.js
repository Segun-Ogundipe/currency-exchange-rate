import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from '../src/components/App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with a text content', () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.textContent).toBe('Successfully created A React App from scratch!');
});
