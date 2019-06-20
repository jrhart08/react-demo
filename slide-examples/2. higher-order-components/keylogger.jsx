/* eslint-disable */

const withClickLogging = (Component) => {
  const LoggerComponent = ({ onClick, ...rest }) => {
    const logOnClick = (e) => {
      console.log(`clicked on ${Component.name}`);

      return onClick && onClick(e);
    };

    return <Component onClick={logOnClick} {...rest} />;
  };

  LoggerComponent.name = `withLogging(${Component.name})`;

  return LoggerComponent;
};

// elsewhere
const ComponentWithLogging = withClickLogging(props => <div>{props}</div>);

export default withClickLogging;
