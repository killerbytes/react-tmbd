import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail } = this.props
    const credits = detail.credits && detail.credits.cast.map((item, index)=> 
    <li key={item.id}>
      <Link to={`/person/${item.id}`}><img src={`${imageBaseUrl}w154/${item.profile_path}`} alt=""/></Link>
      <p>
        <Link to={`/person/${item.id}`}>{item.name}</Link>
      </p>
      <p>{item.character}</p>
    </li>
  )

      return <div className="container">
        <div className="detail">
          <div className="image">
            <img src={`${imageBaseUrl}w342/${detail.poster_path}`} alt=""/>
          </div>
          <div className="meta">
            <h1>{detail.name}</h1>
            <p>{detail.overview}</p>
          </div>
        </div>
        <ul className="people">
          {credits}
        </ul>
      </div>
  }

}
