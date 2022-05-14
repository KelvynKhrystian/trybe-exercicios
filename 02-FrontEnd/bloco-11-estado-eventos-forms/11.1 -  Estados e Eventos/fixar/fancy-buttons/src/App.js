import React from 'react';
import './App.css';



class App extends React.Component {

  constructor() {
    super()

    this.btn1 = this.btn1.bind(this)
    this.btn2 = this.btn2.bind(this)
    this.btn3 = this.btn3.bind(this)
  }

  btn1() {
    console.log('Clicou no 1 !', this)
  }
  
  btn2() {
    console.log('Clicou no 2 !')
  }
  
  btn3() {
    console.log('Clicou no 3 !')
  }
  render() {
    return (
      <div>
          <button onClick={this.btn1}>Botão-1</button>
          <button onClick={this.btn2}>Botão-2</button>
          <button onClick={this.btn3}>Botão-3</button>
      </div>
    );
  }
  
}

export default App;
