import styled, { css } from 'styled-components';

export const TextFieldDiv = styled.div`
  margin-bottom: 1em;
`;

export const TextFieldInput = styled.input`
  display: block;
  ${props => props.danger && css`
    border: solid 1px red;
    box-shadow: 0 0 10px red;
  `}
`;
