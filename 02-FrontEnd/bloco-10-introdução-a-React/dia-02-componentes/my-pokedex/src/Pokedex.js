import React from 'react';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokeCard'>
        <div className='colunaPoke'>
          <div><h2> {this.props.user.name} </h2></div>
          <div> {this.props.user.type} </div>
          <div>Averege weigth: {this.props.user.averageWeight.value} {this.props.user.averageWeight.measurementUnit}</div>
        </div>
        <div>
         <img src={this.props.user.image} alt={this.props.user.id} />
        </div>
        
      </div>
    );
  }
}

Pokedex.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
  

export default Pokedex;
