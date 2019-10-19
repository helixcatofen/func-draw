import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './DrawPage.scss'

class DrawPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return(
            <div className="container">
            <h2>
                Draw with <span> functions. </span>
            </h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                Tell us your name:
                <input type="text" value={this.state.value} />
                </label>
                <input type="submit" value="Begin" />
            </form>
            </div>
        )
        
    }
}

export default DrawPage;