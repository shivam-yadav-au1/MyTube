import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
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

                </ul>
            </div>

        )
    }
}

export default Menu;