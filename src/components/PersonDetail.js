import React, { Component } from 'react'
import Card from './Card.js'

import { imageBaseUrl } from '../constants/Config'

export default class PersonDetail extends Component {
  render(){
    const { detail } = this.props
    const movieCredits = detail.movie_credits && detail.movie_credits.cast.map((item, index)=> <li key={item.id+index}><Card idx={index} {...item} /></li> )
    const tvCredits = detail.tv_credits && detail.tv_credits.cast.map((item, index)=> <li key={item.credit_id}><Card type="tv" idx={index} {...item} /></li>)

      return <div className="container">
        <div className="detail">
          <div className="image">
            {detail.profile_path && <img src={`${imageBaseUrl}w342/${detail.profile_path}`} alt=""/>}
          </div>
          <div className="meta">
            <h1>{detail.name}</h1>
            <p>{detail.biography}</p>
          </div>

        </div>
        <h3>Movies</h3>
        <ul className="cards">
          {movieCredits}
        </ul>
        <h3>Shows</h3>
        <ul className="cards">
          {tvCredits}
        </ul>
      </div>
  }

}
