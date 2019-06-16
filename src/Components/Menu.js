import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {stateMapper} from '../Store/Store.js'

class MenuComponent extends React.Component {

    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_PLAYLISTS"
        })
    }

    render() {
        return (
            <div >
                <h2 className="text-danger"> <span className="oi oi-play-circle"></span>myTube </h2>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item bg-danger text-white">Menus</li>
                    <li className="list-group-item">
                        <Link to="/app">Trending</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/search">Search</Link>
                    </li>
                    <li className="list-group-item">My PlayLists</li>
                    {
                        this.props.playList && this.props.playList.map(p=>{
                            return (
                                <li key={p.etag} className="list-group-item">
                                      <Link to={`/app/playlist/${p.id}`}>{p.snippet.title}</Link>
                                </li>
                            )
                        })
                    }
                     <li className="list-group-item">
                        <Link to="/app/playlists/create">
                            <span className="oi oi-plus" title="icon name" aria-hidden="true"> Create</span>
                        </Link>
                    </li>

                    <li className="list-group-item">My Account</li>
                    <li className="list-group-item">
                        <Link to="/app/profile">Profile</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/app/logout">Logout</Link>
                    </li>

                </ul>
            </div>

        )
    }
}
let Menu = connect(stateMapper)(MenuComponent)
export default Menu;