import React from 'react';
import Videos from './Videos.js';
import {stateMapper} from '../Store/Store.js'
import {connect} from 'react-redux';

class TrendingComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_VIDEOS",
            videoType:"trending"
        })
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:'CLEAR_VIDEOS'
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-danger">Trending Videos</h2>
                <hr />
                <Videos />
            </div>

        )

    }
}
let Trending = connect(stateMapper)(TrendingComponent);
export default Trending;