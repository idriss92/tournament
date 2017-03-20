import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Header from '../components/common/Header'
import Navigation from '../containers/Navigation'

import * as classNames from 'classnames/bind';
const styles = require('../css/main');
const cx = classNames.bind(styles);

class AppContainer extends React.Component<any,any>{
    ACTIVE : any  = {color: 'red'}
    render(){
        return(
         <div className={cx('app')}>
             <Navigation />
           {this.props.children}
         </div>
        )
    }
}

export default AppContainer;