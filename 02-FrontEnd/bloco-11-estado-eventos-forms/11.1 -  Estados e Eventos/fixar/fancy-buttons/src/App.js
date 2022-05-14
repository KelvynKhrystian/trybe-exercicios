import React from 'react';
import './App.css';

function btn1() {
  console.log('Clicou no 1 !')
}

function btn2() {
  console.log('Clicou no 2 !')
}

function btn3() {
  console.log('Clicou no 3 !')
}

class App extends React.Component {
  render() {
    return (
      <div>
          <button onClick={btn1}>Botão-1</button>
          <button onClick={btn2}>Botão-2</button>
          <button onClick={btn3}>Botão-3</button>
      </div>
    );
  }
  
}

export default App;
