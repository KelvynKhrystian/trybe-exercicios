import React from 'react';
import './App.css';
import Forms1 from './Forms1';
import Forms2 from './Forms2';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Exercício React Forms</h1>
        <Forms1 />
        <Forms2 />
        <button type="submit">Clique para exibir os Dados Consolidados</button>
        <button type="submit">Limpar</button>    
      </div>
    );
  }
  
}

export default App;
