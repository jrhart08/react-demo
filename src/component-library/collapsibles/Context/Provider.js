import React from 'react';
import PropTypes from 'prop-types';
import Context from './_context';

class CollapseContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultState !== 'expanded',
    };
  }

  collapse = () => this.setState(() => ({ collapsed: true }));
  expand = () => this.setState(() => ({ collapsed: false }));

  toggleCollapsed = () => this.setState(() => ({
    collapsed: !this.state.collapsed,
  }));

  render() {
    const contextValue = {
      collapsed: this.state.collapsed,
      collapse: this.collapse,
      expand: this.expand,
      toggleCollapsed: this.toggleCollapsed,
    };

    return <Context.Provider {...this.props} value={contextValue} />;
  }
}

CollapseContextProvider.propTypes = {
  defaultState: PropTypes.oneOf(['collapsed', 'expanded']),
};

CollapseContextProvider.defaultProps = {
  defaultState: 'collapsed',
};

export default CollapseContextProvider;
