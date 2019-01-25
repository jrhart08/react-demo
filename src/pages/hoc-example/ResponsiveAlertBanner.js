import React from 'react';
import flow from 'lodash/flow';
import withIsMobile from './withIsMobile';
import withAlertOnClick from './withAlertOnClick';

const ResponsiveBanner = ({ isMobile, title, children, ...rest }) => (
  <div {...rest}>
    <h1>{title}</h1>
    {!isMobile && children}
  </div>
);

export default flow(
  withIsMobile,
  withAlertOnClick,
)(ResponsiveBanner);
