import React, { Component } from 'react'
import {Route, Link, BrowserRouter} from 'react-router-dom';
import './App.css';

import FurFriendlyContext from './FurFriendlyContext'

import Space from './Space';
import SpaceContainer from './SpaceContainer'
import AddSpace from './AddSpace'

import STORE from './dummy-store';

export default class App extends Component {
    static contextType = FurFriendlyContext;
    state = {
        spaces: []
    }
    /*
    componentDidMount(){
        fetch('https://obscure-hollows-57839.herokuapp.com/notes')
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

        fetch('https://obscure-hollows-57839.herokuapp.com/folders')
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

    addNote = (noteName,noteText,noteFolder) => {
        console.log('Adding Note: '+noteName)
        const oldNotes = this.state.notes

        const folder = this.state.folders.find(folder => folder.name === noteFolder)
        const modified = new Date().toLocaleString()

        oldNotes.push({
            "id":`${this.generateID()+"ffaf-11e8-8eb2-f2801f1b9fd1"}`,
            "name":`${noteName}`,
            "modified":`${modified}`,
            "folderid":`${folder.folderid}`,
            "content":`${noteText}`
        })

        this.setState({
            notes: oldNotes
        })

        fetch(`https://obscure-hollows-57839.herokuapp.com/notes/`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
                "id":`${this.generateID()}`,
                "name":`${noteName}`,
                "modified":`${modified}`,
                "folderid":`${folder.folderid}`,
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
    */

    render(){
        const contextValue = {
            spaces: STORE.spaces,
            types: STORE.types
        }
        return(
            <BrowserRouter>
                <FurFriendlyContext.Provider value={contextValue}>
                    <header>
                        <Link to='/'><h1>Fur Friendly Spaces</h1></Link>
                    </header>
                    <div className='app'>
                            <main>
                                <AddSpace />
                                <SpaceContainer />
                            </main>
                    </div>
                </FurFriendlyContext.Provider>
            </BrowserRouter>
            
        )
    }
}
