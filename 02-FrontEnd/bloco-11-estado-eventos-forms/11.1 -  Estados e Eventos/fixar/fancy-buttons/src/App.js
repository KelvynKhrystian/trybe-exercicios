import React from 'react';
import './App.css';



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      btn1Click : 0 ,
      btn2Click : 0 ,
      btn3Click : 0
    }

    this.btn1 = this.btn1.bind(this)
    this.btn2 = this.btn2.bind(this)
    this.btn3 = this.btn3.bind(this)
  }

  btn1() {
    this.setState ((estadoAnterior, _props) => ({
      btn1Click : estadoAnterior.btn1Click + 1
    }))
  }
  
  btn2() {
    this.setState ((estadoAnterior, _props) => ({
      btn2Click : estadoAnterior.btn2Click + 1
    }))
  }
  
  btn3() {
    this.setState ((estadoAnterior, _props) => ({
      btn3Click : estadoAnterior.btn3Click + 1
    }))
  }
  render() {
    return (
      <div>
          <button onClick={this.btn1}>Botão "1" :  {this.state.btn1Click} </button>
          <button onClick={this.btn2}>{this.state.btn2Click}</button>
          <button onClick={this.btn3}>{this.state.btn3Click}</button>
      </div>
    );
  }
  
}

export default App;
