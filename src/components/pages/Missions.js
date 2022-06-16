import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../Mission';
import '../../assets/styles/Missions.css';
import { fetchData as fetchMissions } from '../../redux/reducers/mission';

function Missions() {
  const Missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchMissions());
    };
    if (Missions.length === 0) {
      fetchData();
    }
  }, []);

  return (
    <table>

      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>last</th>
        </tr>
      </thead>

      {Missions.map((item) => (
        <Mission
          key={2}
          id={item.mission_id}
          title={item.mission_name}
          description={item.description}
          isMember={item.isMember}
        />
      ))}
    </table>
  );
}

export default Missions;
