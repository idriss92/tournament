import * as React from 'react';
import * as classNames from 'classnames/bind';
import TournamentInputText from '../components/TournamentInputText';
import SingleInput from '../components/common/SingleInput';
const styles = require('../css/components/entrybox');

const cx = classNames.bind(styles);


export class TournamentFormEntryBox extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className={cx('entrybox')} onSubmit={this.props.handleFormSubmit}>
                <h1 className={cx('header')}>Create a new tournament</h1>
                <div>
                    <SingleInput
                        inputType={'text'}
                        title={'Description'}
                        inputClassName={cx('input')}
                        labelClassName={cx('label')}
                        divClassName ={cx('label')}
                        name="description"
                        controlFunc={this.props.handleDescriptionChange}
                        placeholder="Title of tournament"
                        content={this.props.tournament.description}
                    /*onEntryChange={this.props.onEntryChange}*/
                    />
                </div>
                <div>
                    <SingleInput
                        inputType={'number'}
                        title={'Players'}
                        inputClassName={cx('input')}
                        labelClassName={cx('label')}
                        divClassName ={cx('label')}
                        name="players"
                        controlFunc={this.props.handlePlayersRange}
                        placeholder="Number of players"
                        content={this.props.tournament.players}
                    /*onEntryChange={this.props.onEntryChange}*/
                    />
                </div >
                <input type="submit" className="" value="Submit" />
                <button className="" onClick={this.props.handleClearForm}>Clear Form</button>
            </form >
        );

    }
    static propTypes = {
        tournament: React.PropTypes.object,
        handleDescriptionChange: React.PropTypes.func.isRequired,
        handlePlayersRange: React.PropTypes.func.isRequired,
        handleClearForm: React.PropTypes.func.isRequired,
        handleFormSubmit: React.PropTypes.func.isRequired,
        // onEntryChange: React.PropTypes.func.isRequired,
        onEntrySave: React.PropTypes.func.isRequired
    }
}