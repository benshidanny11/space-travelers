/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from '../components/Head';
import Rocket from '../components/items/rocket';
import store from '../redux/store/store';

describe('Test header', () => {
  test('Render header', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>,

    );
    const linkElement = screen.getByText(/Space Travellers' Hub/i);
    expect(linkElement).toBeInTheDocument();
  });
});
describe('Test rocket', () => {
  test('Render header', () => {
    const rocket = {
      description: 'Good rocket', flickr_images: 'img.png', id: 1, rocket_name: 'Rocket 1',
    };
    render(

      <Provider store={store}>
        <Rocket rocket={rocket} />
        ,
      </Provider>,
    );

    const linkElement = screen.getByText(/Rocket 1/i);
    expect(linkElement).toBeInTheDocument();
  });
});
