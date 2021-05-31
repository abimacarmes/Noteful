import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import FurFriendlyContext from './FurFriendlyContext'
import PropTypes from 'prop-types';


export default class Space extends Component {
    static contextType = FurFriendlyContext;

    //need function for up/down voting

    render() {
        const {space} = this.props;
        var positiveImgSrc = "./Icons/positive-vote.png"
        var negativeImgSrc = "./Icons/negative-vote.png"

        console.log(this.context);

        return (
            <div className="space" id={space.id}>
                <h2>Name: {space.name}</h2>
                <h3>Address: {space.address}</h3>
                <h3>Location Type: {space.type}</h3>
                <p>Voting Buttons</p>
                <p><img src={positiveImgSrc} alt="Positive Vote" width="100" height="100"/> {space.upCount}</p>
                <p><img src={negativeImgSrc} alt="Negative Vote" width="100" height="100"/> {space.downCount}</p>
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

