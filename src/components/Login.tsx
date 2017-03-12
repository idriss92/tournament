import * as React from 'react'

export class Login extends React.Component<any,any>{
    emailField:any;
    render(){
        return(
            <div className="login">
                <div className="heading">
                    Login to email
            </div>
            <input className='input' placeholder="Email" ref={(f:any) => {this.emailField = f;}} />

            </div>
        )
    }
}