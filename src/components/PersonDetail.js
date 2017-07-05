import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class PersonDetail extends Component {
  render(){
    const { detail } = this.props
    const movieCredits = detail.movie_credits && detail.movie_credits.cast.map(item=> <li key={item.id}><Link to={`/movie/${item.id}`}>{item.title}</Link></li>)
    const tvCredits = detail.tv_credits && detail.tv_credits.cast.map(item=> <li key={item.credit_id}><Link to={`/tv/${item.id}`}>{item.name}</Link></li>)

      return <div>
        <h1>{detail.name}</h1>
        <img src={`${imageBaseUrl}w154/${detail.profile_path}`} alt=""/>
        <p>{detail.biography}</p>
        <h3>Movies</h3>
        <ul>
          {movieCredits}
        </ul>
        <h3>Shows</h3>
        <ul>
          {tvCredits}
        </ul>
      </div>
  }

}
