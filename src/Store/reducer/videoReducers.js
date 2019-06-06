import {fetchVideos} from "../api/youtubeApi.js"
import {store} from "../Store.js"


function videoReducers(videos=[],action){

    if(action.type === "CLEAR_VIDEOS"){
        return [];
    }

    if(action.type ==="FETCH_VIDEOS"){
        // videos = ["video1","video2","video3","video4"];
        fetchVideos(store,action);
        return videos;
    }
    if(action.type === "VIDEOS_LOADED"){
        videos = action.videos
    }
    return videos;
}

export default videoReducers;