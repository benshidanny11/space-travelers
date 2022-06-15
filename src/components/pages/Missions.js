import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Mission from '../Mission';
import '../../assets/styles/Missions.css';
import { fetchData } from '../../redux/reducers/mission';

function Missions() {
  // only fetches data after being mounted
  const dispatch = useDispatch();
  const mounted = useRef(false);
  useEffect(() => {
    dispatch(fetchData());
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

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
