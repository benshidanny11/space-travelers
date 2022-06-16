/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/styles/myProfile.css';

const MyProfile = () => {
  const Missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const reserved = rockets.filter((rocket) => rocket.isBooked);
  const MyMissions = Missions.filter((mission) => mission.isMember);

  return (
    <div className="profile-container">
      <div>
        <h2>My Missions</h2>
        <ul className="mission-container">
          {MyMissions.map((a) => (<li key={1}>{a.mission_name}</li>))}
        </ul>
      </div>
      <div>
        {' '}
        <h2>My Rockets</h2>
        <ul className="mission-container">
          {reserved.map((rocket) => (<li key={rocket.id}>{rocket.rocket_name}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
