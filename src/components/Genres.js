import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Card from './Card.js'

export default class GenresList extends Component {

    render(){
        const { list } = this.props
        const mappedMovies = list.results && list.results.map(item=> <li key={item.id}><Card {...item} /></li>)
        return <div>
        <nav>
            <ul>
                <li><Link to={`/movies/now_playing`}>Now Playing</Link></li>
                <li><Link to={`/movies/popular`}>Popular</Link></li>
                <li><Link to={`/movies/top_rated`}>Top Rated</Link></li>
                <li><Link to={`/movies/upcoming`}>Upcoming</Link></li>
            </ul>
        </nav>
        <ul className="list-default">{mappedMovies}</ul>
        </div>
    }
  

}
