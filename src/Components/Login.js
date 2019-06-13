import React from 'react'
import {GoogleLogin} from 'react-google-login';

class Login extends React.Component {

    constructor(props){
        super(props)

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseGoogle(response){
        if(!response || !response.accessToken){
            alert("Sorry,Google signin has failed .Please try again. ");
            return;
        }
        let user ={
            token:response.accessToken,
            name:response.profileObj.name
        }
        localStorage.setItem("user",JSON.stringify(user));
        this.props.history.push("/app");
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2 className="text-danger">Login Using Google</h2>
                        <hr />
                        <GoogleLogin
                            clientId="653860976414-vc6he8u19gahd3e5oshqinm263bk8jcp.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            scope="https://www.googleapis.com/auth/youtube"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;