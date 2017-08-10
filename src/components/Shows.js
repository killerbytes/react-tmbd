import React, { Component } from 'react'
import Card from './Card.js'

export default class ShowList extends Component {

    render(){
        const { list } = this.props
        const mappedList = list.results && list.results.map(item=> <li key={item.id}><Card type="tv" {...item} /></li>)
        return <div className="container">
            <h1>Shows</h1>
        <ul className="cards">{mappedList}</ul>
        </div>
    }
  

}
