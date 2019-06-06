import React from 'react'
import { connect } from 'react-redux';
import { store, stateMapper } from '../Store/Store.js';
class VideosComponent extends React.Component {



    renderVideos() {

        return this.props.videos.map(v => {
            let videoId = v.id;

            if (typeof videoId != 'string') {
                videoId = v.id.videoId;
            }
            return (
                <div key={v.etag} className="col-md-4">
                    <a target="_blank" href={`https://youtube.com/watch?v=${v.id}`}>
                        <img src={v.snippet.thumbnails.high.url} className="img-fluid" alt="..." />
                    </a>

                    <small>{v.snippet.title} by <em>{v.snippet.channelTitle}</em></small>
                    <hr />
                </div>


            );
        });

    }
    render() {
        return (
            <div className="row">
                {this.renderVideos()}
            </div>
        )
    }
}

let Videos = connect(stateMapper)(VideosComponent);

export default Videos;