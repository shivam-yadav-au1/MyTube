import React from 'react';
import Videos from './Videos.js'
import { store, stateMapper } from '../Store/Store.js'
import { Provider } from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h1>myTube</h1>
                            <hr />
                            <Videos />
                        </div>
                    </div>

                </div>
            </Provider>
        )
    }
}

export default App;