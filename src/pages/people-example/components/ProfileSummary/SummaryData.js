import React from 'react';
import SecondaryText from '../../../../component-library/SecondaryText';

const SummaryData = ({ title, text }) => (
  <h1>
    「{title}」: <SecondaryText>{text}</SecondaryText>
  </h1>
);

export default SummaryData;
