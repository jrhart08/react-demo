/* eslint-disable */

const withClickLogging = (Component) => ({ onClick, ...rest }) => {
  const logOnClick = (e) => {
    console.log(`clicked on ${Component.name}`);

    return onClick && onClick(e);
  };

  return <Component onClick={logOnClick} {...rest} />;
}
