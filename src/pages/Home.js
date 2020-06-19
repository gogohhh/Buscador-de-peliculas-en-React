import React, {Component} from 'react'

import {Title} from '../componentes/Title.js';
import {BuscarForm} from '../componentes/BuscarForm.js';
import {MovieList} from '../componentes/MovieList.js';

export class Home extends Component {
    state = { usedSearch: false, results: [] }
    
_handleResults = (results) => {
    this.setState({results, usedSearch: true})
}

_renderResults () {
    return(
    this.state.results.length === 0
          ? <p>Sin resultados</p>
          : <MovieList movies={this.state.results} />
        )
          
}
    render(){
        return(
            <div>
            <Title>Buscador de peliculas</Title>
          <div className="BotonBuscar-wrapper">
           <BuscarForm onResults={this._handleResults} />
          </div>
          
          {this.state.usedSearch
          ? this._renderResults()
          : <small>Use el buscador para encontrar una pelicula</small>
          }
            </div>
        )
    }
}