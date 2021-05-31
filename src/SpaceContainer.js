import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import FurFriendlyContext from './FurFriendlyContext'

import Space from './Space';


export default class SpaceContainer extends Component {
    static contextType = FurFriendlyContext;

    //need function for up/down voting

    render() {
        console.log(this.props.space);

        return (
            <div className="spaceContainer">
                {this.context.spaces.map(space => <Space space={space}/> )}
            </div>
        )
    }
}

/*
Note.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            noteId: PropTypes.string.isRequired,
            history: PropTypes.object
        })
    }) 
}
*/

