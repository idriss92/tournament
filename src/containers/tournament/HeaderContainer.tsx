// import * as React from 'react';
// import { connect } from 'react-redux';
// import * as TournamentActions from '../../actions/actionTournament';
// import { logoutUser } from '../../actions/actionUsers';
// import {Header} from '../../components/Tournaments/Header';



// function mapStateToProps(state) {
//   return { 
//     deletedPost: state.posts.deletedPost,
//     authenticatedUser: state.user.status === 'authenticated' ? state.user.user : null,
//     user: state.user
//   };
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//   	 onDeleteClick: () => {
//       let token = sessionStorage.getItem('jwtToken');
//       if (!token || token === '') { //if there is no token, dont bother,
//           let data = {data: {message: 'Please Sign In'}};//axios like error
//           dispatch(TournamentActions.deleteTournamentFailure(data)); // but let other comps know
//           return;
//       }

//     	dispatch(TournamentActions.deleteTournament(ownProps.postId, token))
//       	.then((response) => {
//             !response.error ? dispatch(TournamentActions.deleteTournamentSuccess(response.payload)) : dispatch(TournamentActions.createTournamentFailure(response.payload));
//           });
//   	 },
//      resetMe: () =>{
//         dispatch(TournamentActions.resetDeletedTournament());
//      },

//      logout: () => {
//          sessionStorage.removeItem('jwtToken');
//          dispatch(logoutUser());
//      }
//   }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Header);