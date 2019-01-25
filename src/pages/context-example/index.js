import React from 'react';
import styled, { css } from 'styled-components';
import SecondaryText from '../../component-library/SecondaryText';
import {
  Context as CollapseContext,
  CollapseLine,
  ViewAll,
  withCollapseContext,
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

const ConnectedMinimizable = withCollapseContext(({ collapsed, ...rest }) => (
  <Minimizable minimized={collapsed} {...rest} />
));

// component
const CollapsiblePeopleList = () => (
  <CollapseContext.Provider>
    <div>
      <SectionTitle>Collapsible Section Label</SectionTitle>
      <ViewAllRight />
    </div>
    <ConnectedMinimizable>
      <Square color="blue" />
      <Square color="purple" />
      <Square color="magenta" />
      <Square color="red" />
      <Square color="orange" />
      <Square color="yellow" />
      <Square color="green" />
    </ConnectedMinimizable>
    <CollapseLineUppercase />
  </CollapseContext.Provider>
);

export default CollapsiblePeopleList;
