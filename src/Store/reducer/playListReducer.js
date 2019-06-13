import { fetchPlayLists} from "../api/youtubeApi.js"
import {store} from "../Store.js"

function playListReducer(playList =[],action){

    if(action.type === "FETCH_PLAYLISTS"){
        fetchPlayLists(store,action);
    }

    if(action.type === "PLAYLIST_LOADED"){
        return action.playList;
    }
    return playList;
}

export default playListReducer;