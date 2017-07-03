import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class PersonDetail extends Component {
  render(){
    const { detail } = this.props

      return <div>
        <h1>{detail.name}</h1>
        <img src={`${imageBaseUrl}w154/${detail.profile_path}`} alt=""/>
        <p>{detail.biography}</p>
      </div>
  }

}
