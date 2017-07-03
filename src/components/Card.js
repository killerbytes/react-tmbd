import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const item = this.props;

      return <div className="card">
        <div className="card-image">
          <Link to={`/movie/${item.id}`}><img src={`${imageBaseUrl}w92/${item.poster_path}`} alt=""/></Link>
        </div>
        <div className="card-content">
          <Link to={`/movie/${item.id}`}>{item.title}</Link>
        </div>
      </div>   
  }

}
