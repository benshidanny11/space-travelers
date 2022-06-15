import React from 'react';

function Rocket({ rocket }) {
  return (
    <div>
      <div>
        <img src={rocket.flickr_images} alt="Rocket img" />
      </div>
      <div>
        <h3>{rocket.rocket_name}</h3>
        <p>{rocket.decription}</p>
      </div>
    </div>
  );
}

Rocket.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
      author: PropTypes.string,
    }).isRequired,
  };

export default Rocket;
