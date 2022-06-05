import React from 'react';

class App extends React.Component {
  
  constructor() {
    super()
    this.fixar = this.fixar.bind(this);
    this.fixar2 = this.fixar2.bind(this);
    this.fixar3 = this.fixar3.bind(this);
  }

  fixar() {
      console.log('Clicou no botão! 1')
  }
    
  fixar2() {
      console.log('Clicou no botão! 2')
  }
    
  fixar3() {
      console.log('Clicou no botão! 3')
  }

  render() {
    return (
      <>
        <button onClick={this.fixar}>Botão Fixar</button>
        <button onClick={this.fixar2}>Botão Fixar2</button>
        <button onClick={this.fixar3}>Botão Fixar3</button>
      </>
      
    );
  }
}

export default App;