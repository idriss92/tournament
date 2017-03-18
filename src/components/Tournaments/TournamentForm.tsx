import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReduxForm from "redux-form"

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export class TournamentForm extends React.Component<any,any>{
    tournaments: any[];
    constructor(props:any){
        super(props)
        this.state = {
            tournaments:[]
        }
    }
    render(){
        const {fields:{title, type, description}, handleSubmit} = this.props;
        return(
            <form onSubmit={handleSubmit(this.props.createTournament.bind(this))}>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error: ''}
                    </div>
                </div>
                <div className={`form-group ${type.touched && type.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...type}/>
                    <div className="text-help">
                        {type.touched ? type.error: ''}
                    </div>
                </div>
                <div className={`form-group ${description.touched && description.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...description}/>
                    <div className="text-help">
                        {description.touched ? description.error: ''}
                    </div>
                </div>
                <button type="submit" className="bit btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
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