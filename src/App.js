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
      binaryText: '',
      decimalText: '',
      hexadecimalText: ''
    }
  }

  binaryHundleInput({target: {value} }){
    console.log('binaryHundleInput: ' + value)
    this.setState({
      binaryText: value.replace(/[^01]*/g, '')
    });
  }
  decimalHundleInput({target: {value} }){
    console.log('binaryHundleInput')
    this.setState({
      decimalText: value.replace(/[^0-9]*/g, '')
    });
  }
  hexadecimalHundleInput({target: {value} }){
    console.log('binaryHundleInput')
    this.setState({
      hexadecimalText: value.replace(/[^0-9A-Fa-f]*/g, '')
    });
  }

  render(){
    return (
      <div>
        <div>
          <p>Binary: </p>
          <input type="text" value={this.state.binaryText} onChange={this.binaryHundleInput.bind(this)}/>
        </div>
        <div>
          <p>Decimal: </p>
          <input type="text" value={this.state.decimalText} pattern="[0-9]*" onChange={this.decimalHundleInput.bind(this)}/>
        </div>
        <div>
          <p>Hexadecimal: </p>
          <input type="text" value={this.state.hexadecimalText} pattern="[0-9A-Fa-f]*" onChange={this.hexadecimalHundleInput.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;