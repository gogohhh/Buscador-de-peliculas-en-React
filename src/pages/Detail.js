import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import {ButtonBack} from '../componentes/ButtonBack.js'

const API_KEY = '17f40186'

export class Detail extends Component{
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

state = {movie: {} }

_fetchMovie({id}){
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then(res => res.json())
    .then(movie => {
        console.log({movie})
        this.setState({movie})
    })
}

componentDidMount(){
    console.log(this.props)
    const {id} = this.props.match.params
    this._fetchMovie({id})
}

_Regresar(){
    window.history.back()
}
    
    render(){
        const {Title, Poster, Actors, Metascore,Plot} = this.state.movie
        
        return(
            <div>
                <ButtonBack />
                <h1>{Title}</h1>
                <img src={Poster} />
                <h3>{Actors}</h3>
                <p>Puntuación en Metascore: {Metascore}</p>
            <p>{Plot}</p>
            </div>
        )
    }
}