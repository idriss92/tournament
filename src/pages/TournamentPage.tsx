import * as React from 'react';
import { connect } from 'react-redux'
const tournamentActions = require('../actions/actionTourn');

class TournamentsPage extends React.Component<any,any>{

    constructor(props, context){
        super(props, context);

        this.state
    }

    render() {
        return (
            <div>
                <h1>Tournaments</h1>
                {/*{this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />*/}
            </div>
        )
    }
}

export default TournamentsPage;