import * as React from "react";
import * as TournamentActions from '../actions/actionTournament'
import {connect} from 'react-redux'
import {TournamentFormEntryBox} from '../components/TournamentFormEntryBox'
import {TournamentMainSection} from '../components/TournamentMainSection'
import {TournamentForm} from '../components/Tournaments/TournamentForm';
import { imtyping, createTournament, destroyTournament } from '../actions/actionTourn'
import * as classNames from 'classnames/bind';
const styles = require('../css/components/vote')
const cx = classNames.bind(styles)
class TournamentContainer extends React.Component<any,any>{
    render(){
        const {newTournament, imtyping, createTournament, tournaments, destroyTournament} = this.props;
        return(
            <div className={cx('vote')}>
              <TournamentFormEntryBox
               tournament ={newTournament}
               onEntryChange={imtyping}
               onEntrySave = {createTournament} />
               <TournamentMainSection
                tournaments ={tournaments}
                onDestroy={destroyTournament} />
            </div>
        )
    }

    static propTypes = {
        tournaments: React.PropTypes.array.isRequired,
        newTournament: React.PropTypes.string,
        imtyping: React.PropTypes.func.isRequired,
        createTournament: React.PropTypes.func.isRequired,
        destroyTournament: React.PropTypes.func.isRequired
    }
}

function mapStateToProps (state) {
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
export default connect(mapStateToProps, {createTournament, imtyping, destroyTournament})(TournamentContainer)