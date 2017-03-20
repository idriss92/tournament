import * as React from 'react';
import Page from '../pages/Page';
import AboutContainer from '../containers/AboutContainer';

class AboutPage extends React.Component<any,any> {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'About | reactGo';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'A reactGo example of life' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

export default AboutPage;
