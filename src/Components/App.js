import React from 'react';
import Videos from './Videos.js'
import { store, stateMapper } from '../Store/Store.js'
import Menu from "./Menu.js"
import { Provider } from 'react-redux';
import Trending from './Trending.js';
import Search from './Search.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import VideoPlayer from '../Components/VideoPlayer.js'
import Profile from '../Components/Profile.js'
import Logout from '../Components/Logout.js'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Menu />
                            </div>

                            <div className="col-md-9 ">
                                
                               
                                <Route path="/app" exact={true} component={Trending}/>
                                <Route path="/app/search"  component={Search}/>
                                <Route path="/app/player/:videoId"  component={VideoPlayer}/>
                                <Route path="/app/profile"  component={Profile}/>
                                <Route path="/app/logout"  component={Logout}/>
                            </div>
                        </div>

                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;