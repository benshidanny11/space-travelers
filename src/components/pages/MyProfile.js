import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData as fetchMissions } from '../../redux/reducers/mission';
import '../../assets/styles/myProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchMissions());
    };
    fetchData();
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
