import React, { Component} from 'react'
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext'


export default class NoteListAll extends Component {
    static defaultProps = {

    }
    
    static contextType = NotefulContext;

    onPushDelete = event => {
        event.preventDefault();
        const noteId = event.target.id;
        this.context.deleteNote(noteId);
    }

    render() {

        return (
            <NotefulContext.Consumer>
                {(context) => (
                    <div>
                        <h3>Notes:</h3>
                        <ul className="noteListAll">
                            {this.context.notes.map(note => (
                                <li key={note.id}><Link to={`folders/${note.folderid}/notes/${note.id}`}>
                                    {note.name}<br/>
                                    {' '}
                                    Last Modified: {note.modified}
                                </Link>
                                <button id={note.id} onClick={this.onPushDelete}>Delete</button>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                )}
            </NotefulContext.Consumer>
        )
    }
}