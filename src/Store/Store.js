import {createStore,combineReducers} from 'redux';
import videoReducers from './reducer/videoReducers.js'
import isVideoLoadingReducers from './reducer/isVideoLoadingReducer.js'
import currentVideoPlayerReducer from './reducer/currentVideoPlayerReducer.js';
import currentVideoCommentsReducer from './reducer/currentVideoCommentsReducer';

let reducer = combineReducers({
    videos:videoReducers,
    isVideoLoading:isVideoLoadingReducers,
    currentVideoPlayer:currentVideoPlayerReducer,
    currentVideoComments:currentVideoCommentsReducer

})

let store = createStore(reducer);

store.subscribe(()=>{
    console.log("Dispatched ==>",store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};