import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rocketsReducer } from '../reducers/rocket';

const reducers = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
