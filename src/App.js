import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <FormApp />
    );
  }
}

class FormApp extends Component{
  constructor(props){
    super(props);

    this.state = {
      value: '',
      message: ''
    }
  }

  hundleInput({target: {value} }){
    console.log('hundle input!')
    this.setState({
      value
    });
  }

  send(){
    console.log('button pushed!')
    const {value} = this.state;
    this.setState({
      value: '',
      message: value
    })
  }

  render(){
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.hundleInput.bind(this)}/>
        <button onClick={this.send.bind(this)}>button</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App;