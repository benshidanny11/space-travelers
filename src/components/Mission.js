import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { UPDATE_MEMBER } from '../redux/actions/actionTypes';

export default function Mission(props) {
  const {
    title, description, isMember, id,
  } = props;

  const createMission = (missionId) => ({
    type: UPDATE_MEMBER,
    id: missionId,
  });
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button
          className={isMember ? 'active-btn-one' : 'btn-one'}
          type="button"
        >
          {isMember ? 'Active Member' : 'NOT A MEMBER'}
        </button>
      </td>
      {' '}
      <td>
        <button
          onClick={() => dispatch(createMission(id))}
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
