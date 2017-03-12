import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export interface IAppProps{data:string;}
export class App extends React.Component<IAppProps,{}>{
    ACTIVE : any  = {color: 'red'}
    render(){
        return(
         <div>
            <ul>
               <li><Link to="/home" activeStyle={this.ACTIVE}>Home</Link></li>
               <li><Link to="/about" activeStyle={this.ACTIVE}>About</Link></li>
               <li><Link to="/contact" activeStyle={this.ACTIVE}>Contact</Link></li>
            </ul>				
           {this.props.children}
         </div>
        )
    }
}
