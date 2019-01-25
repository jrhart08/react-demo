import React from 'react';
import PropTypes from 'prop-types';
import TextDanger from '../TextDanger';
import { BlockLabel } from './styles';

const Label = ({ danger, children, ...rest }) => (
  <BlockLabel {...rest}>
    {children}
    {danger && <TextDanger>*</TextDanger>}
  </BlockLabel>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
};

Label.defaultProps = {
  danger: false,
};

export default Label;
