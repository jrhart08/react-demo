import React from 'react';

export default ({ x, y }) => (
  <div
    style={{
      position: 'absolute',
      left: x - 25,
      top: y - 25,
      width: 50,
      height: 50,
      backgroundColor: 'blue',
    }}
  />
);
