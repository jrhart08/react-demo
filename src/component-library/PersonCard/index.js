import React from 'react';
import PropTypes from 'prop-types';
import SecondaryText from '../SecondaryText';
import Card from '../Card';

const PersonCard = ({ person, lastNameFirst, ...rest }) => {
  const { id, firstName, lastName, address } = person;
  const fullName = lastNameFirst
    ? `${lastName}, ${firstName}`
    : `${firstName} ${lastName}`;
  
  return (
    <Card {...rest}>
      <h3>{fullName} (ID {id})</h3>
      <SecondaryText as="h4">{address}</SecondaryText>
    </Card>
  );
};

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
  lastNameFirst: PropTypes.bool,
};

PersonCard.defaultProps = {
  lastNameFirst: false,
};

export default PersonCard;
