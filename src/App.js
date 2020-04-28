import React, { Component } from 'react';

class App extends Component {

    state = {
        astronauts: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(({people}) => this.setState({ astronauts: people }))
    }

    render() {

    return (
      <div className="App">
        <h1>Lost in Space!</h1>
        

        <div className="Astronauts">
          {this.state.astronauts.map((person, id) => <h2 key={id}>{person.name}</h2>)}
        </div>

      </div>
    );
  }
}

export default App;