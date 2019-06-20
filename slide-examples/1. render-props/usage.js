import React from 'react';
import ChoiceBoxSelect from '@gcc/pip-components/dist/ChoiceBoxSelect';

const MyChoiceBoxContent = ({ value: person }) => (
  <React.Fragment>
    <img src={person.profileImage} className="profile-image-thumb" />
    <h2>{person.lastName}, {person.firstName}</h2>
    <h3>{person.occupation}</h3>
  </React.Fragment>
);

const PersonChoiceBoxSelect = props => (
  <ChoiceBoxSelect optionRenderer={MyChoiceBoxContent} {...props} />
);

export default PersonChoiceBoxSelect;



