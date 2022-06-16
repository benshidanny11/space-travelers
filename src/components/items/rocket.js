import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/actions/rocket';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  return (
    <div className="rocket-item">
      <div className="rocket-img-container">
        <img src={rocket.flickr_images} alt="Rocket img" />
      </div>
      <div className="rocket-details">
        <h3>{rocket.rocket_name}</h3>
        <p>
          {rocket.isBooked ? <span className="s-reserved">Reserved</span> : ' '}
          {' '}
          {rocket.description}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(reserveRocket(rocket.id));
          }}
          className={rocket.isBooked ? 'button-res' : 'button-rocket'}
        >
          {rocket.isBooked ? 'Cancel reservation' : 'Reserve rocket'}
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    flickr_images: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    isBooked: bool,
    id: PropTypes.number,
  }).isRequired,
};

export default Rocket;
