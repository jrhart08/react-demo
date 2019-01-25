import React from 'react';
import Mouse from './Mouse';
import RedDot from './RedDot';
import BlueDot from './BlueDot';

export default ({ match }) => {
  const dotRenderer = match.params.color === 'blue' ? BlueDot : RedDot;
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse dotRenderer={dotRenderer} />
    </div>
  );
}
