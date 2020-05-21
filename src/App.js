// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
    astronauts: []
  }
  
  render() {
    console.log(`rendering! ${this.state.astronauts.length}`)
    return (
      <div>
        {this.state.astronauts.map((astro, id) => <h1 key={id}>{astro.name} is in Space!</h1>)}
      </div>
    )
  }
  
  componentDidMount() {
    this.loadAstronauts()
  }

  loadAstronauts = () => {
    const apiUrl = 'http://api.open-notify.org/astros.json'
    fetch(apiUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({astronauts: json.people})
      })
  }
}

export default App

