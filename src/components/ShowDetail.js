import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail } = this.props
    const credits = detail.credits && detail.credits.cast.map(item=> <li key={item.id}><Link to={`/person/${item.id}`}>{item.name}</Link></li>)

      return <div>
        <h1>{detail.name}</h1>
        <img src={`${imageBaseUrl}w154/${detail.poster_path}`} alt=""/>
        <p>{detail.overview}</p>
        <ul>
          {credits}
        </ul>
      </div>
  }

}
