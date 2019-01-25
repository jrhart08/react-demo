import React from 'react';

export default ({ x, y }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    }}
  />
);
