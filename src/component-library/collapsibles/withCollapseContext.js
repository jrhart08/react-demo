import React from 'react';
import Consumer from './Context/Consumer';

export default Component => props => (
  <Consumer>
    {context => <Component {...props} {...context} />}
  </Consumer>
)
