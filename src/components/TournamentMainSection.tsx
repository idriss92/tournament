import * as React from 'react';
import * as  classNames from 'classnames/bind';
import {TournamentItem} from '../components/TournamentItem';
const styles = require('../css/components/main-section');

const cx = classNames.bind(styles);

export class TournamentMainSection extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    tournamentItems: any = this.props.tournaments.map((tournament, key) => {
        return (
            <TournamentItem
                index={key}
                id={tournament.id}
                key={key}
                text = {tournament.description}
                destroyTournament={this.props.onDestroy} />
        )
    });

    render() {
        return (
            <div className={cx('main-section')}>
                <h3 className={cx('header')}>Vote for the favorite tournaments</h3>
                <ul className={cx('list')}>{this.tournamentItems}</ul>
            </div>
        );
    }

    static propTypes = {
        tournaments: React.PropTypes.array.isRequired,
        onDestroy: React.PropTypes.func.isRequired
    }
}
//export default TournamentMainSection