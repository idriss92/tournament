import * as React from 'react';
import { connect } from 'react-redux'
const courseActions =  require('../../actions/actionCourse');
import {bindActionCreators} from 'redux'

class CoursePage extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />
            </div>
        )
    }

    static propTypes = {
        actions: React.PropTypes.object.isRequired,
        // dispatch: React.PropTypes.func.isRequired,
        // courses: React.PropTypes.array.isRequired,
        createCourse: React.PropTypes.func.isRequired
    };
}

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    }
}

// wich function is available in our Component
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
        // createCourse: course => dispatch(courseActions.createCourse(course))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);