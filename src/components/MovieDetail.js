import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail } = this.props.entities
    const { credits, genres, similar } = detail
    const mappedSimilar = similar && similar.results.map(movie=> <li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></li>)
    const mappedGenres = genres && genres.map(genre=> <li key={genre.id}><Link to={`/genre/${genre.id}/movies`}>{genre.name}</Link></li>)
    const mappedCasts = credits && credits.cast.slice(0,5).map(item=> <li key={item.id}><Link to={`/person/${item.id}`}>{item.name}</Link></li>)
      return <div>
        <h1>{detail.title}</h1>
        <img src={`${imageBaseUrl}w154/${detail.poster_path}`} alt=""/>
        <ul>{mappedGenres}</ul>
        <p>{detail.overview}</p>
        <ul>{mappedCasts}</ul>
        <ul>{mappedSimilar}</ul>
      </div>
  }

}
