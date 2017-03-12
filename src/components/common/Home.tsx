import * as React from 'react';

export interface IHomeProps{name:string;}
export class Home extends React.Component<any,any>{
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}