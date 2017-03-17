import * as React from 'react';
import { Link, IndexLink } from 'react-router'

export default class Header extends React.Component<any,any>{
    render(){
        return(
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">TS - Tournaments</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                <li><Link to="/" activeClassName="active">Home</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
                <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
        );
    }
}