import { FETCH_MISSIONS, UPDATE_MEMBER, GET_MISSIONS } from '../actions/actionTypes';

export const fetchData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await res.json();
  const modifiedMissions = missions.map((a) => ({ ...a, isMember: false }));
  dispatch({
    type: FETCH_MISSIONS,
    missions: modifiedMissions,
  });
};

const initialMissions = [
];

export const missionsReducer = (state = initialMissions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.missions;
    case UPDATE_MEMBER:
      return state.map((obj) => {
        if (obj.mission_id === action.id) {
          return { ...obj, isMember: !obj.isMember };
        }
        return obj;
      });
    case GET_MISSIONS:
      return [...state.filter((obj) => obj.isMember)];

    default:
      return state;
  }
};
