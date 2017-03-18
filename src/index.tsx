import * as React from "react";
import * as ReactDOM from "react-dom"
import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import {Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import tournamentReducers from './reducers/tournamentReducer'
import  AboutPage  from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import ContactPage  from "./components/contact/ContactPage";

// import { App } from "./components/app";
// import { Car } from "./components/car";
// import { CarDetail } from "./components/CarDetail";

import rootReducer from './reducers/index'

// import router
import routes from './routes'

const initialState = {};
const store: Store<any> = createStore(rootReducer, initialState);

// let store = createStore(todoApp)
// Static data
         const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'Accord Crosstour',
                make: 'Honda',
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
                price: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'AMG',
                make: 'Mercedes Benz',
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
                price: '$138,157'

            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'X6',
                make: 'BMW',
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
                price: '$68,999'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'Edge',
                make: 'Ford',
                media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
                price: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'Viper',
                make: 'Dodge',
                media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
                price: '$123,890'
            }
        ];

/*ReactDOM.render((
    <Router history = {browserHistory}>
        <Route path = "/" component = {Main}>
            <IndexRoute component = {Home} />
            <Route path = "/home" component = {Home} />
            <Route path = "/about" component = {About} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/cars" component = { Car}  />
            <Route path = "/cars/:id" component={CarDetail} />
            
        </Route>
    </Router>	
), document.getElementById('app'))*/

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
  , document.getElementById('app'));