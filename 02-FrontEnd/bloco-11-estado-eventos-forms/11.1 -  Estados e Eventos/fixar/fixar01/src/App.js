import React from 'react';

function fixar() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  render() {
    return (
      <button onClick={fixar}>Botão Fixar</button>
    );
  }
}

export default App;