import React from 'react';
import PropTypes from 'prop-types';
import { HrStrike } from './styles';

const HrWithText = ({ children, ...rest }) => (
  <HrStrike {...rest}>
    <div>
      {children}
    </div>
  </HrStrike>
);

HrWithText.propTypes = {
  children: PropTypes.node.isRequired,
  // HrStrike props
  strikeColor: PropTypes.string,
  thickness: PropTypes.string,
};

HrWithText.defaultProps = {
  strikeColor: '#ccc', // same color as thd's actual hr elements
  thickness: '1px',
};

export default HrWithText;

export { HrStrike };
