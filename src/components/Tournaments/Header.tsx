import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export class Header extends React.Component<any,any>{

    renderLinks(){
        const{type} = this.props;
        if(type==='tournaments_index'){
            return(
                <ul>
                    <li>
                        <Link to="/tournaments/new">New Tournament</Link>
                    </li>
                </ul>
            )
        }else if(type==='tournaments_new'){
            return(
                <ul>
                    <li><Link to="/">Back to Index</Link></li>
                </ul>
            );
        }
        else if(type === 'tournaments_show'){
            return(
                <ul>
                    <li><Link to="/">Back to Index</Link></li>
                    <button onClick={()=> {this.props.onDeleteClick()}}>Delete Post</button>
                </ul>
                
            );
        }
    }

    render(){
        return(
            <nav className="navbar navbardefault navbarstatic-top>">
                <div className="navbar-collapse collapse" id="navbar">
                    {this.renderLinks()}
                </div>
            </nav>
        )
    }
}