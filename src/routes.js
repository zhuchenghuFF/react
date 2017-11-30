import React from 'react';
import {Route} from 'react-router';

import App from './component/app/App';
// import Home from './component/home/Home';
import Login from './component/login/Login';
import Layout from './component/layout/Layout';

var routes = (
  <Route path="/" component={App}>
    <Route path="login" component={Login} />
    <Route path="layout" component={Layout} />
  </Route>
);

export default routes;
