import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const item = this.props;
    const title = item.type === 'tv' ? item.name : item.title
    const type = item.type || 'movie'
      return <div>
        <Link to={`/${type}/${item.id}`}><img src={`${imageBaseUrl}w154/${item.poster_path}`} alt=""/></Link>
        <p className="card-content">
          <Link to={`/${type}/${item.id}`}>{ title }</Link>
        </p>
      </div>   
  }

}
