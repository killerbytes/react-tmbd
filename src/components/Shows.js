import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ShowList extends Component {

    render(){
        const { list } = this.props
        const mappedList = list.results && list.results.map(item=> <li key={item.id}><Link to={`/tv/${item.id}`}>{item.name}</Link></li>)
        return <div>
            <h1>Shows</h1>
        <nav>
            <ul>
                <li><Link to={`/shows/airing_today`}>Airing Today</Link></li>
                <li><Link to={`/shows/popular`}>Popular</Link></li>
                <li><Link to={`/shows/top_rated`}>Top Rated</Link></li>
            </ul>
        </nav>
        <ul>{mappedList}</ul>
        </div>
    }
  

}
