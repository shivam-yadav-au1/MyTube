import React from 'react';
import { connect } from 'react-redux'
import { stateMapper } from '../Store/Store.js'


class VideoPlayerComponent extends React.Component {

    componentDidMount(){
        this.props.dispatch({
            type:"FETCH_VIDEO_DATA",
            videoId:this.props.match.params.videoId
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-danger">{this.props.match.params.videoId}</h2>
                <hr />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`}
                        allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;