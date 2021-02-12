import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import NotefulContext from './NotefulContext'

export default class AddNote extends Component {
    static contextType = NotefulContext;
    constructor (props){
        super(props);
        this.newNoteName = React.createRef();
        this.newNoteText = React.createRef();
        this.newNoteFolder = React.createRef();
    }

    submitNewNote = event => {
        event.preventDefault();
        if(!this.newNoteName.current.value){
            
        }
        else{
            this.context.addNote(this.newNoteName.current.value,this.newNoteText.current.value,this.newNoteFolder.current.value);
            this.props.history.push(`/`)        
        }
    }

    render() {
        return (
            <div>
                <h3>Create Note:</h3> 
                <form onSubmit={this.submitNewNote}>
                    <label>Name:</label>
                    <input type='text' id='folder-name-input'ref={this.newNoteName}></input>
                    <textarea ref={this.newNoteText}></textarea>
                    <select ref={this.newNoteFolder}>
                        {this.context.folders.map(folder => (
                            <option value={folder.name}>{folder.name}</option>
                        ))}
                    </select>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
