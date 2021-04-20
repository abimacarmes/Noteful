import React, { Component} from 'react'
import NotefulContext from './NotefulContext';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default class NoteListFolder extends Component {
    static contextType = NotefulContext;
    
    onPushDelete = event => {
        event.preventDefault();
        const noteId = event.target.id;
        this.context.deleteNote(noteId);
    }

    render() {    
        const folderId = this.props.match.params.folderId
        const filteredNotes = this.context.notes.filter(note => note.folderid === folderId)
        const filteredFolder = this.context.folders.filter(folder => folder.folderid === folderId)
        var folderName = ""

        if(filteredFolder.length === 1){
            folderName = filteredFolder[0].name
        }
        
        return (
            <NotefulContext.Consumer>
                    {(context) => (
                    <ul className="noteListFolder"> 
                        <h3>{folderName}</h3>
                        <h4>{filteredNotes.length} notes in this folder</h4>
                        {filteredNotes.map(note => (
                            <li key={note.id}><Link to={`${folderId}/notes/${note.id}`}>
                                {note.name}
                                {' '}
                                Last Modified: {note.modified.substring(0,10)}   
                            </Link>
                            <button id={note.id} onClick={this.onPushDelete}>Delete</button>
                            </li>
                        ))}
                    </ul>
                    )}
            </NotefulContext.Consumer>
        )
    }
}

NoteListFolder.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            folderId: PropTypes.string.isRequired,
        })
    }) 
}