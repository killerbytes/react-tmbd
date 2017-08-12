import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from '../actions/entityActions'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.show = this.show.bind(this)
        this.hide = this.hide.bind(this)
        this.state = {listVisible: false}
    }
    show(){
        this.setState({ listVisible: true });
        document.addEventListener("click", this.hide);
    }
        
    hide() {
        this.setState({ listVisible: false });
        document.removeEventListener("click", this.hide);
    }
    handleSearch(e){
        e.preventDefault()
        const { dispatch } = this.props
        if(e.currentTarget.value){
            dispatch(search(e.currentTarget.value))
            this.show()
        }else{
            this.hide()
        }

    }
    render(){
        const { search } = this.props.search
        const mappedSearch = search.results && search.results.map(item=> {
            const title = item.title || item.name
            const date = item.release_date || item.first_air_date 
            return <li key={item.id}><Link to={`/${item.media_type}/${item.id}`}>{title}</Link> {item.media_type}, {date}</li>
        })
        return <div className="search-bar">
            <form>
                <i className="fa fa-search"></i>
                <input type="text" onChange={ this.handleSearch }/>
            </form>
            <ul className={this.state.listVisible ? " show" : ""}>{ mappedSearch }</ul>
        </div>
    }
  

}
