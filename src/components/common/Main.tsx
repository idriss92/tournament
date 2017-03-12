import * as React from 'react';
import { Link } from 'react-router'
import * as mui from 'material-ui'

export class Main extends React.Component<any,any>{
        render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">TS - Tournaments</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/*<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>*/}
               <li><Link to="/" activeClassName="active">Home</Link></li>
               <li><Link to="/about" activeClassName="active">About</Link></li>
               <li><Link to="/contact" activeClassName="active">Contact</Link></li>
               <li><Link to="/cars" activeClassName="active">Cars</Link></li>
               
               <li><Link to="/login" activeClassName="active">Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="app">
                    {this.props.children}
                </div>
            </div>
        );
    }
}