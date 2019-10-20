import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router'
import $ from 'jquery'
import './DrawPage.scss'

function postToDB(user, functions){
    var data = {
        "TableName": "mainBackendTable",
        "Item": {
            "drawingID": {
                "S": user + functions
            },
            "user": {
                "S": user
            },
            "functions": {
                "S": functions  
                    
            }
        }
    }
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pjgf4yqxo7.execute-api.eu-west-3.amazonaws.com/default/hackBackend",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",   
        },
        "processData": false,
        "data": JSON.stringify(data)
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

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
        postToDB("joan", "f(x),y,z")
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