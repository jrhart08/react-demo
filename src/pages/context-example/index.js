import React from 'react';
import styled, { css } from 'styled-components';
import SecondaryText from '../../component-library/SecondaryText';
import {
  Context as CollapseContext,
  CollapseLine,
  ViewAll,
} from '../../component-library/collapsibles';


// styles
const Minimizable = styled.div`
  border: 1px solid black;
  overflow-y: hidden;
  
  ${props => props.minimized && css`
    max-height: 200px;
  `}
`;

const Square = styled.div`
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
  background-color: ${props => props.color};
`;

const ViewAllRight = styled(ViewAll)`
  float: right;
  padding-right: 50px;
`;

const CollapseLineUppercase = styled(CollapseLine)`
  text-transform: uppercase;
`;

const SectionTitle = styled(SecondaryText)`
  font-size: 1.5em;
`;


// component
const CollapsiblePeopleList = () => (
  <CollapseContext.Provider>
    <div>
      <SectionTitle>Collapsible Section Label</SectionTitle>
      <ViewAllRight />
    </div>
    <CollapseContext.Consumer>
      {
        (context) => {
          const { collapsed } = context;

          return (
            <Minimizable minimized={collapsed}>
              <Square color="blue" />
              <Square color="purple" />
              <Square color="magenta" />
              <Square color="red" />
              <Square color="orange" />
              <Square color="yellow" />
              <Square color="green" />
            </Minimizable>
          );
        }
      }
    </CollapseContext.Consumer>
    <CollapseLineUppercase />
  </CollapseContext.Provider>
);

export default CollapsiblePeopleList;
