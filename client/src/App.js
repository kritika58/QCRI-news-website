import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    names: []
  }

  componentDidMount(){
    this.getnames();
  }
  
  getnames = _ => {
    fetch('http://localhost:3000/getnames')
    .then(response => response.json())
    .then(response => this.setState({names: response.data}))
    .catch(err => console.error(err))
  }

  rendergetnames= (({serial, name}) => <div key={serial}>{name}</div>);
  
  render() {
    const { names } =this.state;
    return (
      <div className="App">
      {names.map(this.rendergetnames)}
      </div>
    );
  }
}


export default App;
