import React from 'react';
import Videos from './Videos.js'
import {stateMapper} from '../Store/Store.js'
import {connect} from 'react-redux';

class SearchComponent extends React.Component {

    constructor(props){
        super(props)

        this.state ={
            query:''
        }
        this.inputChanged = this.inputChanged.bind(this);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    inputChanged(event){
        this.setState({query:event.target.value});
    }

    buttonClicked(){
            console.log(this.state.query);
    }

    componentDidMount() {
        this.props.dispatch({
            type: "CLEAR_VIDEOS"
        })
    }
    render() {
        return (
            <div>
                <h2>Search Videos</h2>
                <hr />
                <div className="form-row">
                    <div className="col"> 
                        <input type="text"  onChange={this.inputChanged} className="form-control form-control-lg"/>
                    </div>
                    <button className="btn btn-info btn-lg" onClick={this.buttonClicked}>Search</button>
                </div>
                <Videos />
            </div>
        )

    }
}

let Search = connect(stateMapper)(SearchComponent);
export default Search;