// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    state= {
        data: null
    }

    async componentDidMount(){
let res = await fetch('http://api.open-notify.org/astros.json')
let data = await res.json()
    }
    render() {
        return (
            <div>
                <h4>Hello</h4>
            </div>
        )
    }
}