import * as React from 'react';
import Page from '../pages/Page';
import LoginOrRegisterContainer from '../containers/LoginOrRegister';

class LoginOrRegisterPage extends React.Component<any,any> {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle() {
    return 'LoginOrRegister | Tournament';
  }

  pageMeta() {
    return [
      { name: 'description', content: 'Login or register page' }
    ];
  }

  pageLink() {
    return [];
  }

  render() {
    return (
      <Page {...this.getMetaData()}>
        <LoginOrRegisterContainer {...this.props} />
      </Page>
    );
  }
}

export default LoginOrRegisterPage;
