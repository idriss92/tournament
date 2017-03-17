import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import ContactPage from './components/contact/ContactPage';
import CoursePage from './components/course/CoursePage';

// import {Main} from './components/common/Main'
// import {TournamentsIndex} from './pages/TournamentsIndex';
// import {TournamentsNew} from './pages/TournamentsNew';
// import {TournamentsShow} from './pages/TournamentsShow';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
    <Route path="courses" component={CoursePage} />
  </Route>
);