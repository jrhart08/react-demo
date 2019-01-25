import React from 'react';
import PropTypes from 'prop-types';
import RedDot from './RedDot';

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    return (
      <div>
        <div style={{ height: 1000 }} onMouseMove={this.handleMouseMove}>
          <this.props.dotRenderer {...this.state} />
        </div>
      </div>
    );
  }
}

Mouse.propTypes = {
  dotRenderer: PropTypes.func,
};

Mouse.defaultProps = {
  dotRenderer: RedDot,
};

export default Mouse;
