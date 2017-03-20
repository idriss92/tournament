import * as React from 'react';
import Page from '../pages/Page';
import DashboardContainer from '../containers/DashboardContainer';

class DashboardPage extends React.Component<any,any> {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'Dashboard | Tournament';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'Tournament example of a dashboard page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <DashboardContainer {...this.props} />
      </Page>
    );
  }
}

export default DashboardPage;

