import React, { Component } from 'react'

import Card from './Card.js'

export default class MovieList extends Component {

    render(){
        const { list } = this.props
        const mappedMovies = list.results && list.results.map((item, index)=> <li key={item.id + index}> <Card {...item} /></li>)
        return <div className="container">
        <ul className="cards">{mappedMovies}</ul>
        </div>
    }
  

}
