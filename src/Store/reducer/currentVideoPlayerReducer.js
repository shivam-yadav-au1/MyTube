import {fetchOneVideo} from '../api/youtubeApi.js'
import {store} from '../Store.js'
import {GoogleLogin} from 'react-google-login'
function currentVideoPlayerReducer(currentPlayerVideo={},action){

    if(action.type === "FETCH_VIDEO_DATA"){
        fetchOneVideo(store,action);
    }
    if(action.type === "VIDEO_DATA_LOADED"){
        let newAction = action.videoData;
        newAction.snippet.shortDescription = action.videoData.snippet.description.slice(0,500);
    //    console.log(newAction)
        return newAction;
    }
    if(action.type === "CLEAR_VIDEO_DATA"){
        return currentPlayerVideo;
    }

    return currentPlayerVideo;
}

export default currentVideoPlayerReducer;