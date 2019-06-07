import {createStore,combineReducers} from 'redux';
import videoReducers from './reducer/videoReducers.js'
import isVideoLoadingReducers from './reducer/isVideoLoadingReducer.js'

let reducer = combineReducers({
    videos:videoReducers,
    isVideoLoading:isVideoLoadingReducers
})

let store = createStore(reducer);

store.subscribe(()=>{
    console.log("Dispatched ==>",store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};