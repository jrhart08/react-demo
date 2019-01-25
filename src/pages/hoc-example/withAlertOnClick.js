import React from 'react';

export default (Component) => {
  class AnnoyingAlert extends React.PureComponent {
    alertUser = (e) => {
      e.stopPropagation();
      alert('Warning!! You clicked me!');
    }

    render() {
      return (
        <Component
          role="presentation"
          onClick={this.alertUser}
          {...this.props}
        />
      )
    }
  }

  return AnnoyingAlert;
};
