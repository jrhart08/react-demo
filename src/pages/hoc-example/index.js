import React from 'react';
import SecondaryText from '../../component-library/SecondaryText';
import ResponsiveAlertBanner from './ResponsiveAlertBanner';

export default () => (
  <div>
    <ResponsiveAlertBanner title="Banner Text">
      <SecondaryText>Hello World (Desktop only!)</SecondaryText>
    </ResponsiveAlertBanner>
  </div>
)
