import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../Mission';
import '../../assets/styles/Missions.css';

function Missions() {
  const Missions = useSelector((state) => state.missions);
  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        {' '}
        <th>last</th>
      </tr>
      {Missions.map((item) => (
        <Mission
          key={0}
          id={item.id}
          title={item.title}
          description={item.description}
          isMember={item.isMember}
        />
      ))}
    </table>
  );
}

export default Missions;
