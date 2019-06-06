import {createStore,combineReducers} from 'redux';
import videoReducers from './reducer/videoReducers.js'

let reducer = combineReducers({
    videos:videoReducers
})

let store = createStore(reducer);

store.subscribe(()=>{
    console.log("Dispatched ==>",store.getState());
})

function stateMapper(state){
    return state;
}

export {store,stateMapper};