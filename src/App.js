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
    let val = value.replace(/[^01]*/g, '')
    this.setState({
      binaryText: val,
      decimalText: parseInt(val, 2).toString(10),
      hexadecimalText: parseInt(val, 2).toString(16).toUpperCase()
    });
  }
  decimalHundleInput({target: {value} }){
    console.log('binaryHundleInput')
    let val = value.replace(/[^0-9]*/g, '')
    
    this.setState({
      binaryText: parseInt(val, 10).toString(2),
      decimalText: val,
      hexadecimalText: parseInt(val, 10).toString(16).toUpperCase()
    });
  }
  hexadecimalHundleInput({target: {value} }){
    console.log('binaryHundleInput')
    let val = value.replace(/[^0-9A-Fa-f]*/g, '')
    this.setState({
      binaryText: parseInt(val, 16).toString(2),
      decimalText: parseInt(val, 16).toString(10),
      hexadecimalText: val.toUpperCase()
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