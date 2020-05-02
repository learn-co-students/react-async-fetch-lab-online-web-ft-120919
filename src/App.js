// create your App component here
import React, { Component } from 'react'

export default class App extends Component {

  state = {
    data: []
  }

  render() {
    return (
      <div>
        {this.state.data.map( (person, i) => <p>{person.name}</p> )}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(json => this.setState({data: json.people}))
  }

}
