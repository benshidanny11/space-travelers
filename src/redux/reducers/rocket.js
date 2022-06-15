/* eslint-disable import/prefer-default-export */
import { FETCH_ROCKETS } from '../actions/actionTypes';

const initialState = {
  rockets: [],
};
export const rocketsReducer = ({ rockets } = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return rockets;
  }
};
