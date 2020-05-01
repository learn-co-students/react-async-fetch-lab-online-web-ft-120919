import React, {Component} from 'react';

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(r => r.json())
    .then(json => {
      let peopleNames = json.people.map(value => value.name);
      this.setState({people: peopleNames})
    })
  }

  renderNames() {
    return this.state.people.map((name, i) => <p key={i}>{name}</p>)
  }

  render() {
    return (
      <React.Fragment>
      {this.renderNames()}
      </React.Fragment>
    )
  }
}