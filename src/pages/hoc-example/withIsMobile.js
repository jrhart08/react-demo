import React from 'react';
import _throttle from 'lodash/throttle';

const defaults = {
  throttleDuration: 300, // ms
  mobileMaxWidth: 575, // px
};

const withIsMobile = (WrappedComponent, options = {}) => {
  const params = {
    ...defaults,
    ...options,
  };

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleWindowSizeChange = _throttle(this.handleWindowSizeChange.bind(this), params.throttleDuration);
      this.state = {
        isMobile: window.innerWidth < params.mobileMaxWidth,
      };
    }

    componentWillMount() {
      window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange() {
      const isMobile = window.innerWidth < params.mobileMaxWidth;
      if (isMobile !== this.state.isMobile) {
        this.setState({
          isMobile,
        });
      }
    }

    render() {
      return <WrappedComponent isMobile={this.state.isMobile} {...this.props} />;
    }
  };
};

export default withIsMobile;
