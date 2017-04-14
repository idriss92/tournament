import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as classNames from 'classnames/bind';
import { dismissMessage } from '../actions/actionMessage';
const styles = require('../css/components/message');
const cx = classNames.bind(styles)


class MessageContainer extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    render(){
        return(
              <div
    className={cx('message', {
      show: this.props.message && this.props.message.length > 0,
      success: this.props.type === 'SUCCESS'
    })}
    onClick={dismissMessage}>{this.props.message}</div>
        );
    }

    static propTypes ={
  message: React.PropTypes.string,
  type: React.PropTypes.string,
  dismissMessage: React.PropTypes.func.isRequired
    };
}
function mapStateToProps(state) {
  return {...state.message};
}

export default connect(mapStateToProps, { dismissMessage })(MessageContainer);
