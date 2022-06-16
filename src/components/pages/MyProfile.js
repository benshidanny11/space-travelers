import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/styles/myProfile.css';
import { GET_MISSIONS } from '../../redux/actions/actionTypes';

const MyProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_MISSIONS,
    });
  }, []);

  const Missions = useSelector((state) => state.missions);
  return (
    <div className="profile-container">
      <div>
        <h2>My Missions</h2>
        <ul className="mission-container">
          {Missions.map((a) => (<li key={1}>{a.mission_name}</li>))}
        </ul>
      </div>
      <div>
        {' '}
        <h2>Rockets</h2>
      </div>
    </div>
  );
};

export default MyProfile;
