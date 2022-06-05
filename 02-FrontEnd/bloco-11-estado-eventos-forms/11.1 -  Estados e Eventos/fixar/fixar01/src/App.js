import React from 'react';

function fixar() {
  console.log('Clicou no botão!')
}

function fixara() {
  console.log('Clicou no botão!aaaaaaaaaaaaa')
}

function fixarb() {
  console.log('Clicou no botão!bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={fixar}>Botão Fixar</button>
        <button onClick={fixara}>Botão Fixar2</button>
        <button onClick={fixarb}>Botão Fixar3</button>
      </>
      
    );
  }
}

export default App;