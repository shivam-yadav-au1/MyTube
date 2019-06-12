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
                            clientId="627141934259-qb4d15h8ocifdvh80vg25p8o1qujlb1r.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;