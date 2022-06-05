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
    console.log(`Botão 1 ${this.pintarNome(this.state.btn1Click)}`);
  }
  
  btn2() {
    this.setState ((estadoAnterior, _props) => ({
      btn2Click : estadoAnterior.btn2Click + 1
    }))
    console.log(`Botão 1 ${this.pintarNome(this.state.btn2Click)}`);
  }
  
  btn3() {
    this.setState ((estadoAnterior, _props) => ({
      btn3Click : estadoAnterior.btn3Click + 1
    }))
    console.log(`Botão 1 ${this.pintarNome(this.state.btn3Click)}`);
  }

  pintarNome(numero) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return numero % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { btn1Click, btn2Click, btn3Click } = this.state;
    return (
      <div>
          <button
            onClick={this.btn1}
            style={{ backgroundColor: this.pintarNome(btn1Click) }}
          >
            Botão "1" | Contador: {this.state.btn1Click} 
          </button>
          <button
            onClick={this.btn2}
            style={{ backgroundColor: this.pintarNome(btn2Click) }}
          >
            Botão "2" | Contador: {this.state.btn2Click}</button>
          <button
            onClick={this.btn3}
            style={{ backgroundColor: this.pintarNome(btn3Click) }}
          >
            Botão "3" | Contador: {this.state.btn3Click}
          </button>
      </div>
    );
  }
  
}

export default App;
