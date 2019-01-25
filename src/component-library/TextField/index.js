import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import TextDanger from '../TextDanger';
import { TextFieldDiv, TextFieldInput } from './styles';

const TextField = ({
  label,
  children,
  danger,
  error,
  ...rest
}) => (
  <TextFieldDiv>
    <Label danger={danger}>{label}</Label>
    <TextFieldInput danger={danger} {...rest} />
    {children}
    {error && <TextDanger>{error}</TextDanger>}
  </TextFieldDiv>
);

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  children: PropTypes.node,
  error: PropTypes.node,
};

TextField.defaultProps = {
  danger: false,
  children: null,
  error: null,
};
