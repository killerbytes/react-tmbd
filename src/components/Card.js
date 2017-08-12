import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoImage from './NoImage.js'

import { imageBaseUrl } from '../constants/Config'

export default class Card extends Component {
  render(){
    const item = this.props;
    const title = item.type === 'tv' ? item.name : item.title
    const type = item.type || 'movie'
    const bg = {backgroundImage: `url(${imageBaseUrl}w185/${item.poster_path})`};
    const image = item.poster_path ? <div className="image-bg" style={bg}><img src={`${imageBaseUrl}w154/${item.poster_path}`} alt=""/></div> : <NoImage />
      return <div className="card">
        <Link to={`/${type}/${item.id}`}>
          {image}
        </Link>
        <p className="card-content">
          <Link to={`/${type}/${item.id}`}>{ title }</Link>
        </p>
      </div>   
  }

}
