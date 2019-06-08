/* eslint-disable jsx-a11y/iframe-has-title */
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
    renderTitle(){
        //currentVideoPlayer.snippet.title
        console.log("Title : "+this.props.currentVideoPlayer.snippet)
        if(!this.props.currentVideoPlayer.snippet){
            return "Loding Title ...";
        }else{
            return this.props.currentVideoPlayer.snippet.title
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-danger">{this.renderTitle()}</h2>
                <hr />
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${this.props.match.params.videoId}?rel=0`}
                        allowFullScreen></iframe>
                </div>

                <div className="row">
                    <div className="col-md-10">
                            <h2>
                                Views:{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.viewCount},
                                Likes :{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.likeCount},
                                DisLikes :{this.props.currentVideoPlayer.statistics && this.props.currentVideoPlayer.statistics.dislikeCount},
                            </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        {this.props.currentVideoPlayer.snippet && this.props.currentVideoPlayer.snippet.description}
                    </div>
                </div>
            </div>
        )
    }
}

let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;