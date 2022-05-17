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
      file:'',
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
        <input
          name='inputName'
          type='text' 
          value={this.state.inputName} 
          onChange={this.handleChange} 
          placeholder="input fixar"
        />
        <br></br>
        <br></br>
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
        <br></br>
        <br></br>
        <input
          name='checkbox'
          type='checkbox' 
          value={this.state.checkbox} 
          onChange={this.handleChange} 
        />
        <br></br>
        <br></br>
        <input
          name='file'
          type='file' 
          value={this.state.file} 
          onChange={this.handleChange} 
        />
        

      </forms>
    );
  }
}

export default Form;