import * as React from 'react';
import HeaderContainer from '../containers/tournament/HeaderContainer';
// import ValidateEmailAlertContainer from '../containers/ValidateEmailAlertContainer.js';
import TournamentsList from '../containers/tournament/TournamentsListContainer';

export class TournamentsIndex extends React.Component<any,any> {
  render() {
    return (
      <div>
        <HeaderContainer type="tournaments_index"/>
        <TournamentsList />
      </div>
    );
  }
}

