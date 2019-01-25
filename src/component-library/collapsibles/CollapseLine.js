import React from 'react';
import styled from 'styled-components';
import HrWithText from '../HrWithText';
import Context from './Context';

export const ClickableHrWithText = styled(HrWithText).attrs({ role: 'presentation' })`
  cursor: pointer;
`;

/**
A "Show More/Less" `<hr>`-style line, preconfigured
with a context consumer and `onClick` handler.
*/
const CollapseLine = props => (
  <Context.Consumer>
    {
      (context) => {
        const moreOrFewer = context.collapsed ? 'More' : 'Fewer';

        return (
          <ClickableHrWithText onClick={context.toggleCollapsed} {...props}>
            View {moreOrFewer} Options
          </ClickableHrWithText>
        );
      }
    }
  </Context.Consumer>
);

export default CollapseLine;
