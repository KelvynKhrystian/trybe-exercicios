import React from "react";


class Forms2 extends React.Component {
  render(){
    return(
      <forms>
        <fieldset className='fieldset'>

          <legend>Dados do ultimo emprego</legend>

          <label className='item'>
            Resumo do currículo:  
            <textarea></textarea>
          </label>

          <label className='item'>
            Cargo
            <textarea></textarea>
          </label>

          <label className='item'>
            Descrição do cargo
            <input type='text' />
          </label>
          
        </fieldset>
      </forms>
    );
  }
}

export default Forms2;
