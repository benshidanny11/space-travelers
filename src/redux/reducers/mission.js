/* eslint-disable import/prefer-default-export */
import { FETCH_MISSIONS, UPDATE_MEMBER } from '../actions/actionTypes';

// const fetchData = async () => {
//   const res = await fetch('https://api.spacexdata.com/v3/missions');
//   const data = await res.json();
//   console.log(data);
//   return data;
// };
// fetchData();

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
];

export const missionsReducer = (state = initialMissions, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return [action.payLoad];
    case UPDATE_MEMBER:
      return state.map((obj) => {
        if (obj.id === action.id) {
          return { ...obj, isMember: !obj.isMember };
        }
        return obj;
      });

    default:
      return state;
  }
};
