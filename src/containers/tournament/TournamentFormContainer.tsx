import {TournamentForm} from '../../components/Tournaments/TournamentForm';
import { resetNewTournament } from '../../actions/actionTournament';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {
      dispatch(resetNewTournament());
    }
  }
}


function mapStateToProps(state, ownProps) {
  return {
    newPost: state.posts.newPost
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TournamentForm);