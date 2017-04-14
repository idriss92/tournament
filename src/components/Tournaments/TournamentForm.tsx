import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReduxForm from "redux-form"

import * as classNames from 'classnames/bind';
const styles = require('../../css/components/entrybox');
const cx = classNames.bind(styles);
import TournamentInputText from '../TournamentInputText'

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

export class TournamentForm extends React.Component<any, any>{
    // tournaments: any[];
    // constructor(props:any){
    //     super(props)
    //     this.state = {
    //         tournaments:[]
    //     }
    // }

    constructor(props) {
        super(props);
    }
    render() {
        // const {fields:{title, type, description}, handleSubmit} = this.props;
        return (
            <form /*onSubmit={handleSubmit(this.props.createTournament.bind(this))}*/ >
                        {/*<div>
                    <label>Title</label>
                    <input type="text" />
                    <div></div>
                </div>
                <div>
                    <label>Title2</label>
                    <input type="text" />
                    <div></div>
                </div>
                <div>
                    <label>Title2</label>
                    <input type="text" />
                    <div></div>
                </div>*/}
                <TournamentInputText
                    className={cx('input')}
                    value={this.props.newTournament}
        placeholder="Suggest a hackday idea . . ."
        onEntryChange={this.props.onEntryChange}
        onEntrySave={this.props.onEntrySave}
                />
                <button type="submit" className="bit btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        )
    }

    static propTypes = {
  topic: React.PropTypes.string,
  onEntryChange: React.PropTypes.func.isRequired,
  onEntrySave: React.PropTypes.func.isRequired
        // const {fields:{title, type, description}, handleSubmit} = this.props;
    }

    /*renderTournaments(tournaments: any){
        return this.tournaments.map((tournament:any)=>{
            return (
                <li className="list-group-item" key={tournament.id}>
                    <Link to={"tournaments/"+ tournament.id}>
                    <h3 className="list-group-item-heading">{tournament.title}</h3>
                    </Link>
                </li>
            )
        })
    }*/
}