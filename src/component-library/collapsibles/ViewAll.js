import React from 'react';
import ButtonLink from '../ButtonLink';
import Context from './Context';

const getText = (collapsed, fullCount) => {
  if (collapsed) {
    return fullCount
      ? `View All (${fullCount})`
      : 'View All';
  }
  return 'View Less';
};

/**
A "View All/Less" link preconfigured with a context consumer and `onClick` handler.
*/
const ViewAll = ({ fullCount, ...rest }) => (
  <Context.Consumer>
    {
      (context) => {
        const { collapsed, toggleCollapsed } = context;

        return (
          <ButtonLink onClick={toggleCollapsed} {...rest}>
            {getText(collapsed, fullCount)}
          </ButtonLink>
        );
      }
    }
  </Context.Consumer>
);

export default ViewAll;
