/* eslint-disable import/prefer-default-export */
import { FETCH_ROCKETS, RESERVE_ROCKETS } from '../actions/actionTypes';

const initialState = [];
export const rocketsReducer = (rockets = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...action.payload.map((item) => ({ ...item, isBooked: false }))];
    case RESERVE_ROCKETS:
      return rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, isBooked: !rocket.isBooked };
        }
        return rocket;
      });
    default:
      return rockets;
  }
};
