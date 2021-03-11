import React, { Component } from 'react'
import NotefulContext from './NotefulContext'
import PropTypes from 'prop-types';

export default class NavNoteView extends Component {
    static contextType = NotefulContext;

    render() {
        const {folderId} = this.props.match.params;
        const folder = this.context.folders.find(folder => folder.id === folderId);
        return (
            <div className='nav__noteView'>
                <h2>{folder.name}</h2>
                <button onClick={() => this.props.history.push(`/folders/${folderId}`)}>Go Back</button>
                <button onClick={()=>this.props.history.push('/add-folder')}>+ Add Folder</button>
                <button onClick={()=>this.props.history.push('/add-note')}>+ Add Note</button>
            </div>
        )
    }
}

NavNoteView.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            folderId: PropTypes.string.isRequired,
            history: PropTypes.object
        })
    })  
}
