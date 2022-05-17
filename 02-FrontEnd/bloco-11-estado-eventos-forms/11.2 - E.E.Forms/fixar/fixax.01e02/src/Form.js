import React from 'react';

class Form extends React.Component {

  constructor(){
    super()

    this.metodoFixar = this.metodoFixar.bind(this);

    this.state = {
      inputName: '',
      textArea: ''
    }
  }

  metodoFixar(event) {
    this.setState({
      inputName: event.target.value,
      textArea: event.target.value,
    });
  }

  render () {
    return(
      <forms>
        <h1>Forms do Fixar </h1>
        <input
          name='inputName'
          type='text' 
          value={this.state.inputName} 
          onChange={this.metodoFixar} 
          placeholder="input fixar"
        />
        <br></br>
        <br></br>
        <select>
          <option>Select Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
        </select>
        <br></br>
        <br></br>
        <textarea
          value={this.state.textArea} 
          onChange={this.metodoFixar} 
        >

        </textarea>
        

      </forms>
    );
  }
}

export default Form;