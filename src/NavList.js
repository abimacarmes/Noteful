import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import NotefulContext from './NotefulContext'

export default class NavList extends Component {
    static contextType = NotefulContext

    render() {        
        return (
            <div>
                <ul>
                    {this.context.folders.map(folder =>(
                        <li key={folder.id}><Link to={`/folders/${folder.id}`}>
                            {folder.name}
                        </Link></li>
                    ))}
                </ul>
                <Link to='/add-folder'>+ Add Folder</Link>
            </div>
        )
    }
}
