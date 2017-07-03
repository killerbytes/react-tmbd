import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class MovieDetail extends Component {
  render(){
    const { detail } = this.props
    console.log(detail)

      return <div>
        <h1>Show Detail</h1>
        <h3>{detail.name}</h3>
        <img src={`${imageBaseUrl}w154/${detail.poster_path}`} alt=""/>
        <p>{detail.overview}</p>
      </div>
  }

}
