import React from 'react';
import Videos from './Videos.js';

class Trending extends React.Component {
    render() {
        return (
            <div>
                <h2>Trending Videos</h2>
                <hr />
                <Videos />
            </div>

        )

    }
}

export default Trending;