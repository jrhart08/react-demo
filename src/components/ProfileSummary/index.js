import React from 'react';
import SummaryData from './SummaryData';

const ProfileSummary = ({ person }) => (
  <div style={{ textTransform: 'uppercase' }}>
    <img
      src={person.profilePicture}
      alt="No Profile Picture Available"
      style={{ maxHeight: 600, maxWidth: '100%' }}
    />

    <SummaryData title="Name" text={`${person.firstName} ${person.lastName}`} />
    <SummaryData title="Occupation" text={person.occupation} />
    <SummaryData title="Stand Name" text={person.stand} />
  </div>
);

export default ProfileSummary;
