// create your App component here
import React, { Component } from 'react'

class App extends Component {
  state = {
    data: []
  }


  render() {
    return (
      <div>{this.state.data.map(person => person.name)}</div>
    )
  }
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          data: data.people
        })
      })
  }


}

export default App