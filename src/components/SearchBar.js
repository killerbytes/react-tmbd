import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../actions/entityActions'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e){
        e.preventDefault()
        const { dispatch } = this.props
        if(e.currentTarget.value){
            dispatch(search(e.currentTarget.value))
        }else{
            this.hidden = 'hide'
            console.log(this)
        }

    }
    render(){
        const { search } = this.props.search
        const mappedSearch = search.results && search.results.map(movie=> {
            const title = movie.title || movie.name
            return <li key={movie.id}><Link to={`/${movie.media_type}/${movie.id}`}>{title}</Link></li>
        })
        return <div>
            <form action="">
                <input type="text" onChange={ this.handleSearch }/>
            </form>
            <ul className={this.hidden}>{ mappedSearch }</ul>
        </div>
    }
  

}
