import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <FormApp />
      //TODO
      //各基数ごとにコンポーネントで分ける
    );
  }
}

class FormApp extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      binaryText: '',
      decimalText: '',
      hexadecimalText: ''
    }
  }

  handleChange(value, cardinal, inputreg){
    
    console.log("val:" + value);
    let regex = "/[^" + inputreg + "]*/g";
    let normalizedVal = value.replace(regex, '');
    console.log("reg:" + regex);
    console.log("normVal:" + normalizedVal);
    console.log("cardinal:" + cardinal);
    let [binary, decimal, hexadecimal] = this.convertCardinal(normalizedVal, cardinal);
    this.setState({
      binaryText: binary,
      decimalText: decimal,
      hexadecimalText: hexadecimal
    });
  }

  convertCardinal(number, cardinal){
    let i = parseInt(number, cardinal);
    if(Number.isNaN(i)){
      return ['', '', '']
    }
    let binary = i.toString(2);
    let decimal = i.toString(10);
    let hexadecimal = i.toString(16).toUpperCase();
    return [binary, decimal, hexadecimal]
  }

//
  render(){
    return (
      <div>
        <div>
          <p>Binary: </p>
          <NumberForm value={this.state.binaryText} onChange={event => {this.handleChange(event.target.value, 2, "01")}} />
        </div>
        <div>
          <p>Decimal: </p>
          <NumberForm value={this.state.decimalText} onChange={event => {this.handleChange(event.target.value, 10, "0-9")}} />
        </div>
        <div>
          <p>Hexadecimal: </p>
          <NumberForm value={this.state.hexadecimalText} onChange={event => {this.handleChange(event.target.value, 16, "0-9A-Fa-f")}} />
        </div>
      </div>
    );
  }
}

function NumberForm(props){
  return (
    <input 
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}


export default App;