import React, { Component } from 'react'
import {Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';

import NotefulContext from './NotefulContext'

import NavNewNoteFolder from './NavNewNoteFolder'
import NavList from './NavList'
import NavNoteView from './NavNoteView'

import NoteListAll from './NoteListAll'
import NoteListFolder from './NoteListFolder'
import AddFolder from './AddFolder'
import AddNote from './AddNote'
import Note from './Note';
import ErrorBoundary from './ErrorBoundary'

//import STORE from './dummy-store';

export default class App extends Component {
    static contextType = NotefulContext;
    state = {
        notes: [],
        folders: [],
    }

    componentDidMount(){
        fetch('http://localhost:9090/notes')
        .then(notesResult => {
            if(!notesResult.ok){
                throw new Error('Something went wrong.');
            }
            return notesResult.json()
        })
        .then(notesJson => {
            this.setState({
                notes: notesJson
            })
        })
        .catch(error =>
            console.log(error.message)
        )

        fetch('http://localhost:9090/folders')
        .then(foldersResult => {
            if(!foldersResult.ok){
                throw new Error('Something went wrong.');
            }
            return foldersResult.json()
        })
        .then(foldersJson => {
            this.setState({
                folders: foldersJson
            })
        })
        .catch(error =>
            console.log(error.message)
        )
    }

    deleteNote = noteId => {
        console.log('Deleting Note: '+noteId)
        const newNotes = this.state.notes.filter(note => note.id !== noteId)
        this.setState({
            notes: newNotes
        });

        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(result => {
            if(!result.ok){
                throw new Error('Something went wrong.')
            }
            return result.json()
        })
        .catch(error => {
            console.log(error.message)
        })
    };

    addFolder = folderName => {
        console.log('Adding Folder: ' + folderName);
        const oldFolders = this.state.folders
        oldFolders.push({
            "id":`${this.generateID()}-ffaf-11e8-8eb2-f2801f1b9fd1`,
            'name': folderName
        });
        this.setState({
            folder: oldFolders
        })

        fetch(`http://localhost:9090/folders/`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
                "id":`${this.generateID()}-ffaf-11e8-8eb2-f2801f1b9fd1`,
                'name': folderName
            })
          }
        )
        .then(result => {
            if(!result.ok){
                throw new Error('Something went wrong.')
            }
            return result.json()
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    addNote = (noteName,noteText,noteFolder) => {
        console.log('Adding Note: '+noteName)
        const oldNotes = this.state.notes

        const folder = this.state.folders.find(folder => folder.name === noteFolder)

        const modified = new Date()

        oldNotes.push({
            "id":`${this.generateID()+"ffaf-11e8-8eb2-f2801f1b9fd1"}`,
            "name":`${noteName}`,
            "modified":`${modified}`,
            "folderId":`${folder.id}`,
            "content":`${noteText}`
        })

        this.setState({
            notes: oldNotes
        })

        fetch(`http://localhost:9090/notes/`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
                "id":`${this.generateID()}`,
                "name":`${noteName}`,
                "modified":`${modified}`,
                "folderId":`${folder.id}`,
                "content":`${noteText}`
            })
          }
        )
        .then(result => {
            if(!result.ok){
                throw new Error('Something went wrong.')
            }
            return result.json()
        })
        .catch(error => {
            console.log(error.message)
        })

        console.log(this.state.notes)

    }

    generateID = () => {
        const characterOptions = 'abcdefghijklmnopqrstuvwxyz0123456789'
        let id =''
        var charactersLength = characterOptions.length;
        for ( var i = 0; i < 7; i++ ) {
            id += characterOptions.charAt(Math.floor(Math.random() * charactersLength));
        }
        return id;
    }
    
    mainRoutes = () => {
        return(
            <>
                <Route exact path='/' component={NoteListAll}/>
                <Route exact path='/folders/:folderId' component={NoteListFolder}/>
                <Route path='/folders/:folderId/notes/:noteId' component={Note}/>
                <Route path='/add-folder' component={AddFolder}/>
                <Route path='/add-note' component={AddNote}/>
            </>
        )
    }

    navRoutes = () => {
        return(
            <>
                <Route exact path='/' component={NavList}/>
                <Route exact path='/folders/:folderId' component={NavList}/>
                <Route path='/folders/:folderId/notes/:noteId' component={NavNoteView}/>
                <Route path='/add' component={NavNewNoteFolder}/>
            </>
        )
    }

    render(){
        const contextValue = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.deleteNote,
            addFolder: this.addFolder,
            addNote: this.addNote
        }
        return(
            <BrowserRouter>
                <NotefulContext.Provider value={contextValue}>
                    <div className='app'>
                        <Link to='/'><h1>Noteful</h1></Link>
                            <nav>
                                <ErrorBoundary>
                                    {this.navRoutes()}
                                </ErrorBoundary>
                            </nav>
                            <main>
                                {this.mainRoutes()}
                            </main>
                    </div>
                </NotefulContext.Provider>
            </BrowserRouter>
            
        )
    }
}
