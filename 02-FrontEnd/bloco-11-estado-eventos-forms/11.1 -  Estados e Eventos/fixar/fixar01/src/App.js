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
    }
  }

  fixar() {
    console.log('Clicou no botão! 1')
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 + 1,
    }));
  };
    
  fixar2() {
      console.log('Clicou no botão! 2')
      this.setState ((estadoAnterior, _props) => ({
        btn2: estadoAnterior.btn2 + 1,
      }));
  };
    
  fixar3() {
      console.log('Clicou no botão! 3')
      this.setState((estadoAnterior, _props) => ({
        btn3: estadoAnterior.btn3 + 1,
      }))
  }

  render() {
    return (
      <>
        <button onClick={this.fixar}>{this.state.btn1}</button>
        <button onClick={this.fixar2}>{this.state.btn2}</button>
        <button onClick={this.fixar3}>{this.state.btn3}</button>
      </>
      
    );
  }
}

export default App;