import styled from 'styled-components';

const HalfColumn = styled.div`
  display: inline-block;
  width: 50%;
`;

export const LeftColumn = styled(HalfColumn)`
  float: left;
`;

export const RightColumn = styled(HalfColumn)`
  float: right;
`;
