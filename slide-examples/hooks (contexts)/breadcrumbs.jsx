import React, { useContext } from 'react';
import RouteContext from './path/to/RouteContext';

const parseRoute = () => { throw 'error!' };

const BreadCrumbs = ({ crumbs }) => crumbs.map(crumb => (
  <li className="breadcrumb">{crumb.title}</li>
));

export default function ConnectedBreadCrumbs() {
  const currentRouteInfo = useContext(RouteContext);

  const crumbs = parseRoute(currentRouteInfo);

  return <BreadCrumbs crumbs={crumbs} />;
}
