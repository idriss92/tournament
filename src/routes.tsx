import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

// import App from './pages/App';
import {Main} from './components/common/Main'
import {TournamentsIndex} from './pages/TournamentsIndex';
import {TournamentsNew} from './pages/TournamentsNew';
import {TournamentsShow} from './pages/TournamentsShow';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={TournamentsIndex} />
    <Route path="tournaments/new" component={TournamentsNew} />
    <Route path="tournaments/:id" component={TournamentsShow} />
    {/*<Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgotPwd" component={ForgotPwd} />
    <Route path="/validateEmail/:token" component={ValidateEmail} />
    <Route path="/profile" component={Profile} />*/}
  </Route>
);