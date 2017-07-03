import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PeopleList extends Component {

    render(){
        const { list } = this.props
        const mappedList = list.results && list.results.map(item=> <li key={item.id}><Link to={`/person/${item.id}`}>{item.name}</Link></li>)
        return <div>
            <h1>People</h1>
            <ul>{mappedList}</ul>
        </div>
    }
  

}
