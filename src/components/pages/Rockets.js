import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { getRocetsAction } from '../../redux/actions/rocket';
import '../../assets/styles/rockets.css';
import Rocket from '../items/rocket';

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(getRocetsAction());
    };
    if (rockets.length === 0) {
      fetchData();
    }
  }, []);
  return (
    <div>
      {rockets.map((rocket) => (<Rocket rocket={rocket} key={uuid()} />))}
    </div>
  );
}

export default Rockets;
