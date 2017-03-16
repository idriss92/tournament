import * as React from 'react';

export interface IAboutProps{name:string;}

class AboutPage extends React.Component<any,any>{
   render() {
      return (
         <div>
            <h1>About</h1>
            <p>This application uses React, Redux, React Router and a variety of other helpful libraries</p>
         </div>
      )
   }
}

export default AboutPage;