import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import FurFriendlyContext from './FurFriendlyContext'
import PropTypes from 'prop-types';

export default class AddSpace extends Component {
    static contextType = FurFriendlyContext;
    constructor (props){
        super(props);
        this.newSpaceName = React.createRef();
        this.newSpaceAddress = React.createRef();
        this.newNoteFolder = React.createRef();
    }
    state = {
        errorMsg: ''
    }

    submitNewSpace = event => {
        event.preventDefault();

        console.log("New Location Added!")
        /*
        if(!this.newSpaceName.current.value || !this.newSpaceAddress.current.value){
            this.setState({
                errorMsg: 'Space Name and Address are required and cannot be blank.'
            })
        }
        else{
            this.context.addNote(this.newSpaceName.current.value,this.newSpaceAddress.current.value,this.newNoteFolder.current.value);
            this.props.history.push(`/`)        
        }
        */
    }
    //should add some form of address check/search? 
    render() {
        return (
            <div>
                <h3>Create Note:</h3> 
                <form onSubmit={this.submitNewNote}>
                    <label>Name:</label>
                    <input type='text' id='space-name-input'ref={this.newSpaceName}></input>
                    <label>Address:</label>
                    <input ref={this.newSpaceAddress}></input>
                    <label>Location Type:</label>
                    <select ref={this.newNoteFolder}>
                        {this.context.types.map(type => (
                            <option value={type}>{type}</option>
                        ))}
                    </select>
                    <h3>{this.state.errorMsg}</h3>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
