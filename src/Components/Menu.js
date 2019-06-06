import React from 'react'

class Menu extends React.Component {
    render() {
        return (
            <div >
                <h2> My Tube </h2>
                <hr />
                <ul className="list-group">
                    <li className="list-group-item active">Menus</li>
                    <li className="list-group-item">Trending </li>
                    <li className="list-group-item">Search  </li>
                    
                </ul>
            </div>

        )
    }
}

export default Menu;