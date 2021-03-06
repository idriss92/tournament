import * as React from 'react';
import Page from '../pages/Page';
import AppContainer from '../containers/AppContainer';
import { title, meta, link } from './assets';

class AppPage extends React.Component<any,any>{
    render(){
        return(
            <Page title={title} meta={meta} link={link}>
                <AppContainer {...this.props} />
            </Page>
        );
    }
}

export default AppPage;

