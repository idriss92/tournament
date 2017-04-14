import * as React from 'react';
import * as classNames from 'classnames/bind';
import TournamentInputText from '../components/TournamentInputText';
const styles = require('../css/components/entrybox');

const cx = classNames.bind(styles);


export class TournamentFormEntryBox extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={cx('entrybox')}>
                <h1 className={cx('header')}>Enter title of new tournament</h1>
                <TournamentInputText
                    className={cx('input')}
                    value={this.props.tournament}
                    placeholder="Title of a tournament..."
                    onEntryChange={this.props.onEntryChange}
                    onEntrySave={this.props.onEntrySave} />
            </div>
        );

    }

    static propTypes = {
        tournament: React.PropTypes.string,
        onEntryChange: React.PropTypes.func.isRequired,
        onEntrySave: React.PropTypes.func.isRequired
    }
}