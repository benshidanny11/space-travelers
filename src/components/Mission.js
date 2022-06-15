import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UPDATE_MEMBER } from '../redux/actions/actionTypes';

export default function Mission(props) {
  const {
    title, description, isMember, id,
  } = props;
  console.log(id);
  //   const createMission = (id)=>{
  //       return {
  //           type:UPDATE_MEMBER,
  //           id
  //       }

  //   }
  const dispatch = useDispatch();
  //   const

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button className={isMember ? 'active-btn-one' : 'btn-one'} type="button">
          {isMember ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      {' '}
      <td>
        <button
          onClick={() => dispatch({
            type: UPDATE_MEMBER,
            id: 'this3',
          })}
          className={isMember ? 'active-btn-two' : 'btn-two'}
          type="button"
        >
          {' '}
          {isMember ? 'Leave Mission' : 'Join Mission '}
        </button>
      </td>
    </tr>
  );
}

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired,
};
