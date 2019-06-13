import React from 'react'
import {Redirect} from 'react-router-dom';

class Logout extends React.Component {


    render() {

        localStorage.removeItem("user")

        return (
            <div>
                <h2 className="text-danger">Logout</h2>
                <hr />
                <p>Logging you out....please wait</p>
                <Redirect to="/login"/>
            </div>
        )
    }
}

export default Logout;