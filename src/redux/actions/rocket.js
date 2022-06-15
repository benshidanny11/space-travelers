/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FETCH_ROCKETS } from './actionTypes';

export const getRocetsAction = () => (dispatch) => axios.get('')
  .then(({ data }) => {
    dispatch({ type: FETCH_ROCKETS, payload: data, error: null });
  })
  .catch((error) => {
    dispatch({ type: 'GET_ROCKETS_ERROR', payload: [], error });
  });
