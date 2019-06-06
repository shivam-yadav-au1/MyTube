import React from 'react';
import Videos from './Videos.js'
import { store, stateMapper } from '../Store/Store.js'
import Menu from "./Menu.js"
import { Provider } from 'react-redux';
import Trending from './Trending.js';
import Search from './Search.js'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <Menu/>
                        </div>
                  
                        <div className="col-md-9 ">
                            <h1>myTube</h1>
                            <hr />
                            <Trending/>
                            <Search/>
                        </div>
                    </div>

                </div>
            </Provider>
        )
    }
}

export default App;