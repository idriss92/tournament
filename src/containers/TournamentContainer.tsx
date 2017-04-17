import * as React from "react";
import * as TournamentActions from '../actions/actionTournament'
import { connect } from 'react-redux'
import { TournamentFormEntryBox } from '../components/TournamentFormEntryBox'
import { TournamentMainSection } from '../components/TournamentMainSection'
import { TournamentForm } from '../components/Tournaments/TournamentForm';
import { handleDescriptionChange, handlePlayersRange, handleClearForm, handleFormSubmit, /*imtyping,*/ createTournament, destroyTournament } from '../actions/actionTourn'
import * as classNames from 'classnames/bind';
const styles = require('../css/components/vote')
const cx = classNames.bind(styles)

// handleFormSubmit(){
//     console.log(this.props);
// }
// handleClearForm(){

// }
class TournamentContainer extends React.Component<any, any>{

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      players: 0
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePlayersRange = this.handlePlayersRange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  render() {
    const { handleDescriptionChange, handlePlayersRange, newTournament, handleClearForm, handleFormSubmit, /*imtyping,*/ createTournament, tournaments, destroyTournament } = this.props;
    return (
      <div className={cx('vote')}>
        <TournamentFormEntryBox
          tournament={newTournament}
          /*onEntryChange={imtyping}*/
          onEntrySave={createTournament}
          handleClearForm={this.handleClearForm}
          handleFormSubmit={this.handleFormSubmit}
          handleDescriptionChange={this.handleDescriptionChange}
          handlePlayersRange={this.handlePlayersRange} />
        {/*<TournamentMainSection
                tournaments ={tournaments}
                onDestroy={destroyTournament} />*/}
      </div>
    )
  }

  static propTypes = {
    tournaments: React.PropTypes.array.isRequired,
    newTournament: React.PropTypes.object,
    // handleClearForm: React.PropTypes.func.isRequired,
    // handleFormSubmit: React.PropTypes.func.isRequired,
    // imtyping: React.PropTypes.func.isRequired,
    createTournament: React.PropTypes.func.isRequired,
    destroyTournament: React.PropTypes.func.isRequired
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const formPayload = {
      players: this.state.players,
      description: this.state.description
    }
    // console.log(e);
    // console.log(this.state);

    console.log("send the post to api "+ formPayload + " "+ this.state);
    this.handleClearForm(e);

  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handlePlayersRange(e) {
    this.setState({ players: e.target.value });
  }

  handleClearForm(e){
    e.preventDefault();
    this.setState({
      description: '',
      players: 0
    })
    console.log(this.state)
  }
}


function mapStateToProps(state) {
  return {
    tournaments: state.tournament.tournaments,
    newTournament: state.tournament.newTournament
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTournament: () => {
      dispatch(TournamentActions.fetchTournaments()).then((response) => {
        !response.error ? dispatch(TournamentActions.fetchTournamentsSuccess(response.payload.data)) : dispatch(TournamentActions.fetchTournamentsFailure(response.payload.data));
      });
    }
  }
}


// export default connect(mapStateToProps, mapDispatchToProps)(TournamentContainer);
export default connect(mapStateToProps, { createTournament, handleClearForm, handleFormSubmit, handleDescriptionChange, handlePlayersRange, /*imtyping,*/ destroyTournament })(TournamentContainer)