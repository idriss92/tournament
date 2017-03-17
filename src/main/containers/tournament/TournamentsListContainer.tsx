import * as React from "react";
import * as TournamentActions from '../../actions/actionTournament'
import {connect} from 'react-redux'
import {TournamentList} from '../../components/Tournaments/TournamentList';

const mapStateToProps = (state) => {
  return { 
    postsList: state.posts.postsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(TournamentActions.fetchTournaments()).then((response) => {
            !response.error ? dispatch(TournamentActions.fetchTournamentsSuccess(response.payload.data)) : dispatch(TournamentActions.fetchTournamentsFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentList);