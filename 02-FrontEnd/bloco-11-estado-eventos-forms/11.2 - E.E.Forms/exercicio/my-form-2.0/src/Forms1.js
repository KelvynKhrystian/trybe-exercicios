import React from "react";


class Forms1 extends React.Component {
    render(){
        return(
            <forms>
          <fieldset className='fieldset'>

            <legend>Formulário de cadastro de currículo </legend>

            <label className='item'>
              Nome:  
              <input type='text' />
            </label>

            <label className='item'>
              Email:
              <input type='email' />
            </label>

            <label className='item'>
              CPF:
              <input type='text' />
            </label>

            <label className='item'>
              Endereço: 
              <input type='text' />
            </label>

            <label className='item'>
              Cidade:
              <input type='text' />
            </label>

            <label className='item'>
              Estado:
              <select name="select">
                <option value="valor1">Maranhão</option>
                <option value="valor2" selected>São Paulo</option>
                <option value="valor3">Santa Catarina</option>
                <option value="valor3">Acre</option>
              </select>
            </label>

            <label className='item'>
              Tipo de Casa: <br></br>
              <label htmlFor='casa' >Casa<input type='radio' id='casa' name='radio' /> </label>
              <label htmlFor='apartamento' >Apartamento<input type='radio' id='apartamento' name='radio' /></label>
            </label>

          </fieldset>
  
        </forms>
        );
    }
}

export default Forms1;