import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import App from '../components/App';

describe('1) When user clicks on My profile', () => {
  test('should render the rockets page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    userEvent.click(screen.getByRole('link', { name: /My profile/i }));

    expect(screen.getByText(/My Missions/i)).toBeInTheDocument();
  });
});

describe('1) When user clicks on Rockets Link', () => {
  test('should render the rockets page', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    userEvent.click(screen.getByRole('link', { name: /Mission/i }));

    expect(
      screen.getByRole('columnheader', { name: /mission/i }),
    ).toBeInTheDocument();
  });
});
