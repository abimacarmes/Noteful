import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import NotefulContext from './NotefulContext'
import PropTypes from 'prop-types';


export default class Note extends Component {
    static contextType = NotefulContext;

    onPushDelete = event => {
        event.preventDefault();
        const noteId = event.target.id;
        this.props.history.push('/')
        this.context.deleteNote(noteId);
    }

    render() {
        const noteId = this.props.match.params.noteId;
        const note = this.context.notes.find(note => note.id === noteId);

        return (
            <div>
                <h2>{note.name}</h2>
                <h3>Last Modified:{note.modified.substring(0,10)}</h3>
                <button id={noteId} onClick={this.onPushDelete}>Delete</button>
                <p>{note.content}</p>
            </div>
        )
    }
}

Note.propTypes = {
    noteId: PropTypes.string.isRequired,
    history: PropTypes.object
}

