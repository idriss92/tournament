import * as React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as classNames from 'classnames/bind';
import { logOut } from '../actions/actionUsers';
const styles = ('../css/components/navigation');
const cx = classNames.bind(styles)

class Navigation extends React.Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className={cx('navigation')} role="navigation">
                <Link to="/" className={cx('item', 'logo')} activeClassName={cx('active')}>Tournaments</Link>
                { this.props.user.authenticated ? (
                    <Link
                    onClick={this.props.logOut}
                    className={cx('item')} to="/">Logout</Link>
                ) : (
                    <Link className={cx('item')} to="/login">Log in</Link>
                )}
                <Link className={cx('item')} to="/dashboard">Dashboard</Link>
                <Link to="/about" className={cx('item')} activeClassName={cx('active')}>About</Link>
        {/*<Link to="/contact" className={cx('item')} activeClassName={cx('active')}>Contact</Link>
        <Link to="/courses" className={cx('item')} activeClassName={cx('active')}>Courses</Link>
        <Link to="/tournaments" className={cx('item')} activeClassName={cx('active')}>Tournaments</Link>*/}
            </nav>
        );
    }

    static propTypes = {
        user: React.PropTypes.object,
        logout: React.PropTypes.func.isRequired
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, {logOut})(Navigation)