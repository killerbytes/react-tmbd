import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail, similar } = this.props.entities
    console.log(detail)
    const mappedSimilar = similar.results && similar.results.map(movie=> <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>)
    const mappedGenres = detail.genres && detail.genres.map(genre=> <li key={genre.id}><Link to={`/genre/${genre.id}/movies`}>{genre.name}</Link></li>)

      return <div>
        <h1>Movie Detail</h1>
        <h3>{detail.title}</h3>
        <img src={`${imageBaseUrl}w154/${detail.poster_path}`} alt=""/>
        <ul>{mappedGenres}</ul>
        <p>{detail.overview}</p>
        <ul>{mappedSimilar}</ul>
        </div>
  }

}
