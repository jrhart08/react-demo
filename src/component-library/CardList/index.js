import styled from 'styled-components';
import Card from '../Card';

const PersonList = styled.div`
  ${Card} + ${Card} {
    margin-top: 20px;
  }
`;

export default PersonList;
