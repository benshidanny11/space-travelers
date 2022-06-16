import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../redux/store/store';

test('renders Space travelers', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const linkElement = screen.getByText(/Space Travellers' Hub/i);
  expect(linkElement).toBeInTheDocument();
});
