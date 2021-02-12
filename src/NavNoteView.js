import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import {Link} from 'react-router-dom';

export default class NavNoteView extends Component {
    static contextType = NotefulContext;

    render() {
        const {folderId} = this.props.match.params;
        const folder = this.context.folders.find(folder => folder.id === folderId);
        return (
            <div className='nav__noteView'>
                <h2>{folder.name}</h2>
                <button onClick={() => this.props.history.push(`/folders/${folderId}`)}>Go Back</button>
                <Link to='/add-folder'>+ Add Folder</Link>
            </div>
        )
    }
}
