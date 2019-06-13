import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            name:""
        }
    }

    componentDidMount(){
        let user = localStorage.getItem("user");

        user = JSON.parse(user);
        this.setState({
            name:user.name
        })

    }

    render() {
        return (
            <div>
                <h2 className="text-danger">Profile</h2>
                <hr />
                You are logged in as <strong>{this.state.name}</strong>
            </div>
        )

    }
}


export default Profile