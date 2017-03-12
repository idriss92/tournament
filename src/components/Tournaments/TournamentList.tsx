import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export class TournamentList extends React.Component<any,any>{
    tournaments: any[];
    constructor(props:any){
        super(props)
        this.state = {
            tournaments:[]
        }
    }
    render(){
        if(this.props.loading){
            return <div><h1>Tournaments</h1><h3>Loading</h3></div>
        }

        return(
            <div>
                <h1>Tournaments</h1>
                <ul className="list-group">
                    {this.renderTournaments(this.props.tournaments)}
                </ul>
            </div>
        )
    }

    renderTournaments(tournaments: any){
        return this.tournaments.map((tournament:any)=>{
            return (
                <li className="list-group-item" key={tournament.id}>
                    <Link to={"posts/"+ tournament.id}>
                    <h3 className="list-group-item-heading">{tournament.title}</h3>
                    </Link>
                </li>
            )
        })
    }
}