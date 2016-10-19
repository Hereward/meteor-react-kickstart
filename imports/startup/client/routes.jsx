import React from 'react';
import { render } from 'react-dom';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import IndexContainer from '../../ui/containers/IndexContainer.jsx';
import SignInContainer from '../../ui/containers/SignInContainer.jsx';
import RegisterContainer from '../../ui/containers/RegisterContainer.jsx';
import LayoutContainer from '../../ui/containers/LayoutContainer.jsx';

import About from '../../ui/pages/About.jsx';
import MainLayout from '../../ui/layouts/MainLayout.jsx';


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={IndexContainer} />
      <Route path="/about" component={About} />
      <Route path="/signin" component={SignInContainer} />
      <Route path="/register" component={RegisterContainer} />
    </Route>
  </Router>
);

