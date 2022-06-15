import React from 'react';
import Mission from '../Mission';
import '../../assets/styles/Missions.css';

function Missions() {
  const data = {
    title: 'Thaicom',
    description: ` The Missions section displays a list of current missions along with
  their brief description and participation status. There is also a
  button next to each mission that allows users to join the selected
  mission or leave the mission the user joined earlier.`,
  };
  const { title, description } = data;

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        {' '}
        <th>last</th>
      </tr>
      <Mission title={title} description={description} />
    </table>
  );
}

export default Missions;
