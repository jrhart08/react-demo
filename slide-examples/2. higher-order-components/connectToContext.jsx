import React from 'react';
import MyContext from './path/to/MyContext';

const connectToContext = Component => props =>(
  <MyContext.Consumer>
    {
      contextValue => <Component {...contextValue} {...props} />
    }
  </MyContext.Consumer>
);

export default connectToContext;
