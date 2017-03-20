import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppPage from './pages/AppPage';
// import AboutPage from './components/about/AboutPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage'
import HomePage from './components/home/HomePage';
import ContactPage from './components/contact/ContactPage';
import CoursePage from './pages/CoursePage';
import TournamentPage from './pages/TournamentPage'
import LoginOrRegisterPage from './pages/LoginOrRegisterPage'

// import { fetchVoteData } from './fetch-data';
// import { App, Vote, Dashboard, About, LoginOrRegister } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={AppPage}>
      <IndexRoute component={HomePage} />
      <Route path="dashboard" component={DashboardPage} onEnter={redirectAuth} />
      <Route path="login" component={LoginOrRegisterPage} onEnter={redirectAuth} />
      <Route path="about" component={AboutPage} />
      <Route path="contact" component={ContactPage} />
      <Route path="courses" component={CoursePage} />
      <Route path="tournaments" component={TournamentPage} />
    </Route>
  );
};