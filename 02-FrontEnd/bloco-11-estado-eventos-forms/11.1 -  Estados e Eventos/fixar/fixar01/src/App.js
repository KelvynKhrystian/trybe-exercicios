import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.fixar = this.fixar.bind(this);
    this.fixar2 = this.fixar2.bind(this);
    this.fixar3 = this.fixar3.bind(this);
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
      cor: 'red',
    }
  }

  fixar() {
    console.log('Clicou no botão! 1')
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 + 1,
    }),() => {
      console.log(`Botão 1 ${this.changeColor(this.state.btn1)}`);
    });
  };
    
  fixar2() {
    console.log('Clicou no botão! 2')
    this.setState ((estadoAnterior, _props) => ({
      btn2: estadoAnterior.btn2 + 1,
    }),() => {
      console.log(`Botão 2 ${this.changeColor(this.state.btn2)}`);
    });
  };
    
  fixar3() {
    console.log('Clicou no botão! 3')
    this.setState((estadoAnterior, _props) => ({
      btn3: estadoAnterior.btn3 + 1,
    }),() => {
      console.log(`Botão 3 ${this.changeColor(this.state.btn3)}`);
    });
  }

  changeColor = (numero) => {
    return numero % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <>
        <button onClick={this.fixar} style={ { backgroundColor: this.changeColor(this.state.btn1) } }>{this.state.btn1}</button>
        <button onClick={this.fixar2} style={ { backgroundColor: this.changeColor(this.state.btn2) } }>{this.state.btn2}</button>
        <button onClick={this.fixar3} style={ { backgroundColor: this.changeColor(this.state.btn3) } }>{this.state.btn3}</button>
      </>
      
    );
  }
}

export default App;