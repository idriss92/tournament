import {TournamentDetails} from '../../components/Tournaments/TournamentDetails';
import { fetchTournament, fetchTournamentSuccess, fetchTournamentFailure, resetActiveTournament, resetDeletedTournament } from '../../actions/actionTournament';
import { connect } from 'react-redux';



function mapStateToProps(globalState, ownProps) {
  return {
    activePost: globalState.posts.activePost,
    postId: ownProps.id
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => {
      dispatch(fetchTournament(id))
        .then((result) => {
          // Note: Error's "data" is in result.payload.response.data (inside "response")
          // success's "data" is in result.payload.data
          if (result.payload.response && result.payload.response.status !== 200) {
            dispatch(fetchTournamentFailure(result.payload.response.data));
          } else {
            dispatch(fetchTournamentSuccess(result.payload.data))
          }
        })
    },
    resetMe: () => {
      //clean up both activePost(currrently open) and deletedPost(open and being deleted) states
      dispatch(resetActiveTournament());
      dispatch(resetDeletedTournament());
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TournamentDetails);