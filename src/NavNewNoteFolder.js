import React, { Component } from 'react'
//import {Route, Link, BrowserRouter} from 'react-router-dom';
import NotefulContext from './NotefulContext'
import PropTypes from 'prop-types';

export default class NavNewFolder extends Component {
    static contextType = NotefulContext

    back = event => {
        event.preventDefault();
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

NavNewFolder.propTypes = {
    history: PropTypes.object
}
