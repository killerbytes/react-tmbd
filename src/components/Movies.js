import React, { Component } from 'react'
import { listType } from '../constants/Types'
import Card from './Card.js'

export default class MovieList extends Component {

    render(){
        const { list } = this.props
        console.log(this.props.category)
        const mappedMovies = list.results && list.results.map((item, index)=> <li key={item.id + index}> <Card {...item} /></li>)
        return <div className="container">
            
            <h1>{listType[this.props.category]}</h1>
        <ul className="cards">{mappedMovies}</ul>
        </div>
    }
  

}
