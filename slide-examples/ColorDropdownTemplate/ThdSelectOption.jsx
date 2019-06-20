import React from 'react';
import PropTypes from 'prop-types';

const ColorOption = ({ value: choice }) => (
  <React.Fragment>
    <img
      src={choice.mediaUrl}
      alt={choice.shortLabel}
    />
    {choice.shortLabel}
  </React.Fragment>
);

ColorOption.propTypes = {
  // value = choice
  value: PropTypes.shape({
    shortLabel: PropTypes.string.isRequired,
    mediaUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ColorOption;
