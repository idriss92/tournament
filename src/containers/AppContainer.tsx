import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Header from '../components/common/Header';
import Navigation from '../containers/Navigation';
import MessageContainer from '../containers/MessageContainer';
import * as classNames from 'classnames/bind';
const styles = require('../css/main');
const cx = classNames.bind(styles);

class AppContainer extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return(
         <div className={cx('app')}>
             <MessageContainer />
             <Navigation />
           {this.props.children}
         </div>
        )
    }

    static prodTypes = {
        children: React.PropTypes.object
    }
}

export default AppContainer;