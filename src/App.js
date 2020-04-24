import React from 'react'

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response=>response.json())
    }

    render() {
        return (
            <div>hi
                {/* {this.componentDidMount()} */}
            </div>
        )
    }
}