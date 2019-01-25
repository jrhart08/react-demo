import styled from 'styled-components';

// mrw someone asks how I wrote this: https://i.redd.it/eiztcf9h7yt11.jpg
export const HrStrike = styled.div`
  text-align: center;
  overflow: hidden;
  white-space: nowrap;

  & > div {
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 9999px;
      height: ${props => props.thickness};
      background: ${props => props.strikeColor};
    }

    &::before {
      right: 100%;
      margin-right: 0.5em;
    }

    &::after {
      left: 100%;
      margin-left: 0.5em;
    }
  }
`;
