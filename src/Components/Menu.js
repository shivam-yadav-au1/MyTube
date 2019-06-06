import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
    render() {
        return (
            <div >
                <h2> My Tube </h2>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item active">Menus</li>
                    <li className="list-group-item">
                        <Link to="/">Trending</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/search">Search</Link>
                    </li>

                </ul>
            </div>

        )
    }
}

export default Menu;