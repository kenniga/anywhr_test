import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Welcome'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange( event ) {
        this.setState(
            {
                value: event.target.value
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h2>Input your name here:</h2>
                <input value={this.state.value} onChange={this.handleChange} type="text"/>
                <h2>{this.state.value}</h2>
            </div>
        );
    }
}

export default App;
