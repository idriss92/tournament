import * as React from 'react';
import Page from './Page';
import TournamentContainer from '../containers/TournamentContainer'
class TournamentsPage extends React.Component<any,any>{
    getMetaData(){
        return{
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle(){
        return 'Tournament | Tournament';
    }

    pageMeta(){
        return[
            {name: 'description', content: 'A tournament example of a tournament'}
        ]
    }

    pageLink(){
        return [];
    }

    render() {
        return (
            <Page{...this.getMetaData()}>
                <TournamentContainer {...this.props} />
            </Page>
        )
    }
}

export default TournamentsPage;