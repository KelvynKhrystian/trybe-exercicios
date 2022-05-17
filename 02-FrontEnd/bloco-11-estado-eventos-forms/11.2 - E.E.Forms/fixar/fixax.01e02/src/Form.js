import React from 'react';

class Form extends React.Component {

  constructor(){
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      inputName: '',
      textArea: '',
      options: '',
      checkbox: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render () {
    return(
      <forms>
        <h1>Forms do Fixar </h1>
        <fieldset>
          <legend>Nome do ser</legend>
          <input
            name='inputName'
            type='text' 
            value={this.state.inputName} 
            onChange={this.handleChange} 
            placeholder="input fixar"
          />
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>select e text area</legend>
          <select name='options' value={this.state.options} onChange={this.handleChange}  >
            <option value="teste">teste</option>
            <option value="teste2">teste2</option>
            <option value="teste3">teste3</option>
          </select>
          <br></br>
          <br></br>
          <textarea
            value={this.state.textArea} 
            onChange={this.handleChange} 
            name='textArea'
          >
          </textarea>
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>checkbox</legend>
          <input
            name='checkbox'
            type='checkbox' 
            value={this.state.checkbox} 
            onChange={this.handleChange} 
          />
        </fieldset>
        <br></br>
        <br></br>
        <fieldset>
          <legend>file</legend>
          <input type="file" />
          {/* file é não pode ser um componente controlado */}
        </fieldset>

      </forms>
    );
  }
}

export default Form;