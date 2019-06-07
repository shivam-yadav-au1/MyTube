import {fetchOneVideo} from '../api/youtubeApi.js'
import {store} from '../Store.js'
function currentVideoPlayerReducer(currentPlayerVideo={},action){

    if(action.type === "FETCH_VIDEO_DATA"){
        fetchOneVideo(store,action);
    }
    if(action.type === "VIDEO_DATA_LOADED"){
        return action.videoData;
    }

    return currentPlayerVideo;
}

export default currentVideoPlayerReducer;