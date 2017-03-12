import * as React from 'react';

export interface IAboutProps{name:string;}

export class About extends React.Component<any,any>{
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}