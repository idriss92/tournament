import * as React from "react";
import * as ReactDOM from "react-dom";

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export class TournamentDetails extends React.Component<any,any>{
    tournaments: any[];
    constructor(props:any){
        super(props)
        this.state = {
            tournaments:[]
        }
    }
    render(){
        const {tournament} = this.props.activePost;
        if(!tournament){
            return <div>Loading...</div>;
        }

        return(
            <div>
                <h3>{tournament.title}</h3>
                <h6>Type {tournament.type}</h6>
                <p>{tournament.description}</p>
            </div>
        );
    }

    renderTournaments(tournaments: any){
        return this.tournaments.map((tournament:any)=>{
            return (
                <li className="list-group-item" key={tournament.id}>
                    <Link to={"tournaments/"+ tournament.id}>
                    <h3 className="list-group-item-heading">{tournament.title}</h3>
                    </Link>
                </li>
            )
        })
    }
}