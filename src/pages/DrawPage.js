import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'

import './DrawPage.scss'

class DrawPage extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                      redirect: false
                    };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({redirect: true});
    }
    updateName = (e) =>{
        this.setState({value:e.target.value});
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                        pathname: '/draw/2',
                        state: { name: this.state.value }
                      }}
                />
        }
        return(
            <div className="container">
            <h2>
                Draw with <span> functions. </span>
            </h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                Tell us your name:
                <input type="text" value={this.state.value} onChange={this.updateName} />
                </label>
                <input type="submit" value="Begin" />
            </form>
            </div>
        )
        
    }
}

export default DrawPage;