import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import PeopleExample from './pages/people-example';
import TickerExample from './pages/bad-ticker-example';
import RenderPropsExample from './pages/render-props-example';
import HOCExample from './pages/hoc-example';
import ContextExample from './pages/context-example';

const AppContainer = () => (
  <BrowserRouter>
    <div className="container">
      <ul>
        <li><Link to="/ticker-example/AAPL">Ticker Example (Bad!)</Link></li>
        <li><Link to="/mouse-tracker-example/blue">Mouse Tracker (Render Props) (Blue)</Link></li>
        <li><Link to="/mouse-tracker-example/red">Mouse Tracker (Render Props) (Red)</Link></li>
        <li><Link to="/annoy-the-user">Annoy the User (HOC)</Link></li>
        <li><Link to="/collapsible-example">Collapsible (Context API)</Link></li>
        <li><Link to="/people-example">People Example (w/ Redux)</Link></li>
      </ul>

      <hr />
      <Route path="/" component={() => <div />} />
      <Route path="/ticker-example/:symbol" component={TickerExample} />
      <Route path="/mouse-tracker-example/:color" component={RenderPropsExample} />
      <Route path="/annoy-the-user" component={HOCExample} />
      <Route path="/collapsible-example" component={ContextExample} />
      <Route path="/people-example" component={PeopleExample} />
    </div>
  </BrowserRouter>
);

export default AppContainer;
