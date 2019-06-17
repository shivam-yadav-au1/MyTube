import {store} from '../Store.js'
import {createPlayList} from '../api/youtubeApi.js'


function newPlayListReducer(newPlayList={},action){
    
    if(action.type === 'CLEAR_PLAYLIST_CREATED'){
        return {};
    }

    if(action.type === "CREATE_PLAYLIST"){
        createPlayList(store,action);
        return newPlayList;
    }
    if(action.type === "PLAYLIST_CREATED"){
        return action.newPlayList;
    }
    return newPlayList;

}

export default newPlayListReducer;