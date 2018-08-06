import React from 'react';
import PropTypes from 'prop-types';

const Feature = props => {
  return (
    <div className="feature">
      <img
        src={props.imageSource}
        alt={props.imageName}
        className="feature__image"
      />
      <h3 className="feature__title">{props.title}</h3>
      <p className="feature__description">{props.description}</p>
    </div>
  );
};

Feature.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

Feature.defaultProps = {
  imageSource: 'https://via.placeholder.com/350x250',
  imageName: 'Placeholder',
  title: 'A Feature',
  description:
    'The key to more success is to get a massage once a week, very important, major key, cloth talk. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion!'
};
export default Feature;
