import styled, { css } from 'styled-components';

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  padding: 1.25rem;

  ${props => props.active && css`
    border: 1px solid blue;
    box-shadow: 0 0 10px blue;
  `}
`;

export default Card;
