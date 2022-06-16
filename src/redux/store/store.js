import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rocketsReducer } from '../reducers/rocket';
import { missionsReducer } from '../reducers/mission';

const reducers = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk, logger),
);

export default store;
