import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card.js'
import PersonCard from './PersonCard.js'
import NoImage from './NoImage.js'
import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail } = this.props.entities
    const { credits, genres, similar } = detail

    const mappedSimilar = similar && similar.results.slice(0, 6).map((item, index)=> <li key={item.id+index}><Card {...item} /></li>)

    const mappedGenres = genres && genres.map(genre=> <li key={genre.id}><span className="label"><Link to={`/genre/${genre.id}/movies`}>{genre.name}</Link></span></li>)
    
    const mappedCasts = credits && credits.cast.slice(0,6).map((item, index)=> <li key={item.id+index}><PersonCard {...item} /></li>)

    const image = detail.poster_path ? <img src={`${imageBaseUrl}w342/${detail.poster_path}`} alt=""/> : <NoImage/>

    return <div className="container">
        <div className="detail">
          <div className="image">
            {image}
          </div>
          <div className="meta">
            <h1>{detail.title} <small>{detail.release_date}</small></h1>
            <ul className="genres">{mappedGenres}</ul>
            <p>{detail.overview}</p>
          </div>

        </div>
        <h4>Top Billed Cast</h4>
        <ul className="people">{mappedCasts}</ul>
        <h4>Similar</h4>
        <ul className="cards">{mappedSimilar}</ul>
      </div>
  }

}
