import React, { Component } from 'react'

export default class App extends Component {

    state = {
        people: []
    }
    
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(resp => {
            this.setState ({
                people: resp.people
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.people.map(people => <ul> {people.name} </ul>)}
            </div>
        )
    }

}
