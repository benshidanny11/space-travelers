/* eslint-disable import/prefer-default-export */
import { FETCH_MISSIONS, UPDATE_MEMBER } from '../actions/actionTypes';

export const fetchData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await res.json();
  const modifiedMissions = missions.map((a) => ({ ...a, isMember: false }));
  console.log(modifiedMissions);
  dispatch({
    type: FETCH_MISSIONS,
    missions: modifiedMissions,
  });
};

const initialMissions = [
  {
    title: 'Thaicom',
    description: ` The Missions section displays a list of current missions along with
    their brief description and participation status. There is also a
    button next to each mission that allows users to join the selected
    mission or leave the mission the user joined earlier.`,
    isMember: true,
    id: 'this3',
  },
  {
    title: 'Thaicom',
    description: ` The Missions section displays a list of current missions along with
    their brief description and participation status. There is also a
    button next to each mission that allows users to join the selected
    mission or leave the mission the user joined earlier.`,
    isMember: true,
    id: 'this23',
  },
];

export const missionsReducer = (state = initialMissions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [...action.missions];
    case UPDATE_MEMBER:
      return state.map((obj) => {
        if (obj.mission_id === action.id) {
          return { ...obj, isMember: !obj.isMember };
        }
        return obj;
      });

    default:
      return state;
  }
};
