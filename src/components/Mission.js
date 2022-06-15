import React from 'react';
import PropTypes from 'prop-types';

export default function Mission(props) {
  const { title, description } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>
        {description}
      </td>
      <td><button className="btn-one" type="button">NOT A MEMBER</button></td>
      {' '}
      <td><button className="btn-two" type="button">Join Mission</button></td>
    </tr>
  );
}

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
