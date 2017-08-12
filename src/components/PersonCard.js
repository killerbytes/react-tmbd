import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NoImage from './NoImage.js'
import Card from './Card.js'

import { imageBaseUrl } from '../constants/Config'

export default class PersonCard extends Component {
  render(){
    const item = this.props;
    const type = item.type || 'person'
    const bg = {backgroundImage: `url(${imageBaseUrl}w185/${item.profile_path})`};
    const image = item.profile_path ? <div className="image-bg" style={bg}><img src={`${imageBaseUrl}w154/${item.profile_path}`} alt=""/></div> : <NoImage />
      return <div className="card">
        <Link to={`/${type}/${item.id}`}>
          {image}
        </Link>
        <p className="card-content">
          <Link to={`/${type}/${item.id}`}>{ item.name }</Link>
        </p>
      </div>   
  }
}
