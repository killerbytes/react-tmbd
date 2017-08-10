import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { imageBaseUrl } from '../constants/Config'

export default class PeopleList extends Component {

    render(){
        const { list } = this.props
        const mappedList = list.results && list.results.map(item=> 
        <li key={item.id}>
            <Link to={`/person/${item.id}`}><img src={`${imageBaseUrl}w154/${item.profile_path}`} alt=""/></Link>
            <p>
            <Link to={`/person/${item.id}`}>{item.name}</Link>
            </p>
            <p>{item.character}</p>
        </li>
        )
                
        return <div className="container">
            <h1>People</h1>
            <ul className="people">{mappedList}</ul>
        </div>
    }
  

}
