import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import NotefulContext from './NotefulContext'

export default class AddFolder extends Component {
    static contextType = NotefulContext;
    constructor (props){
        super(props);
        this.newFolderName = React.createRef();
    }

    submitNewFolder = event => {
        event.preventDefault();
        const newFolderName = this.newFolderName.current.value;
        if(!newFolderName){
            
        }
        else{
            this.context.addFolder(newFolderName);
            this.props.history.push(`/`)
        }
    }

    render() {
        return (
            <div>
                <h3>Create Folder:</h3> 
                <form onSubmit={this.submitNewFolder}>
                    <label>Name:</label>
                    <input type='text' id='folder-name-input'ref={this.newFolderName}></input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
