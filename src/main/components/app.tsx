import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Header from './common/Header'
class App extends React.Component<any,any>{
    ACTIVE : any  = {color: 'red'}
    render(){
        return(
         <div className="container-fluid">
             <Header />
            {/*<ul>
               <li><Link to="/home" activeStyle={this.ACTIVE}>Home</Link></li>
               <li><Link to="/about" activeStyle={this.ACTIVE}>About</Link></li>
               <li><Link to="/contact" activeStyle={this.ACTIVE}>Contact</Link></li>
            </ul>				*/}
           {this.props.children}
         </div>
        )
    }
}

export default App;