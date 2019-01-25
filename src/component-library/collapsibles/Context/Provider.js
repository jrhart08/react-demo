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
      fullCount: this.props.fullCount,
      collapsed: this.state.collapsed,
      collapse: this.collapse,
      expand: this.expand,
      toggleCollapsed: this.toggleCollapsed,
    };

    return <Context.Provider {...this.props} value={contextValue} />;
  }
}

CollapseContextProvider.propTypes = {
  /**
  Passed to Consumers.
  If fullCount is provided, ViewAll component will show \`View All (${fullCount})`.
  */
  fullCount: PropTypes.number,
  defaultState: PropTypes.oneOf(['collapsed', 'expanded']),
};

CollapseContextProvider.defaultProps = {
  fullCount: null,
  defaultState: 'collapsed',
};

export default CollapseContextProvider;
