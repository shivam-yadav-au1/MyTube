import {createStore,combineReducers} from 'redux';
import videoReducers from './reducer/videoReducers.js'
import isVideoLoadingReducers from './reducer/isVideoLoadingReducer.js'
import currentVideoPlayerReducer from './reducer/currentVideoPlayerReducer.js';
import currentVideoCommentsReducer from './reducer/currentVideoCommentsReducer';
import playListReducer from './reducer/playListReducer.js';
let reducer = combineReducers({
    videos:videoReducers,
    isVideoLoading:isVideoLoadingReducers,
    currentVideoPlayer:currentVideoPlayerReducer,
    currentVideoComments:currentVideoCommentsReducer,
    playList:playListReducer
})

let store = createStore(reducer);

store.subscribe(()=>{
    console.log("Dispatched ==>",store.getState());
})

function stateMapper(state){
    return state;
}

store.dispatch({
    type:"FETCH_PLAYLISTS"
})
export {store,stateMapper};