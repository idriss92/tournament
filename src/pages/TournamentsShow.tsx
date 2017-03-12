import * as React from 'react';
import { connect } from 'react-redux';
import { deleteTournament } from '../actions/actionTournament'
import Header from '../containers/tournament/HeaderContainer';
import TournamentDetailsContainer from '../containers/tournament/TournamentDetailsContainer';

export class TournamentsShow extends React.Component<any,{any}> {
  static contextTypes = {
    router: React.PropTypes.object
  };

  onDeleteClick() {
    // this.props.deletePost(this.props.params.id)
    //   .then(() => { this.context.router.push('/'); });
  }

  render() {
    return (
      <div className='container'>
        <Header type="posts_show" postId={this.props.params.id}/>
        <TournamentDetailsContainer id={this.props.params.id}/>
      </div>
    );
  }
}
