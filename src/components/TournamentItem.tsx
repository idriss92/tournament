import * as React from 'react';
import * as classNames from 'classnames/bind';
const styles = require('../css/components/topic-item');

const cx = classNames.bind(styles);

export class TournamentItem extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }
    onDestroy = () => {
        this.props.destroyTournament(this.props.id)
    }
    render() {
        return (
            <li className={cx('topic-item')} key={this.props.id}>
                <span className={cx('topic')}>{this.props.text}</span>
                <button className={cx('button', 'destroy')} onClick={this.props.onDestroy}>
                    {String.fromCharCode(215)}
                </button>
            </li>
        )
    }

    static propType = {
        text: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
        destroyTournament: React.PropTypes.func.isRequired
    }
}

//export default TournamentItem;