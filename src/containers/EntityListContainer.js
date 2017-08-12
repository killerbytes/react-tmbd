import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Movies from '../components/Movies';
import Shows from '../components/Shows';
import People from '../components/People';
import Genres from '../components/Genres';

import { fetchMovies, fetchGenres, fetchShows, fetchPeople } from '../actions/entityActions'



class EntityListContainer extends Component {
    _loadData =(params=this.props)=>{
        const {match} = params
        switch(true){
            case /^\/people/.test(match.path):
                this.props.dispatch(fetchPeople(match.params.category))
                break;
            case /^\/shows/.test(match.path):
                this.props.dispatch(fetchShows(match.params.category))
                break;
            case /^\/genre/.test(match.path):
                this.props.dispatch(fetchGenres(match.params.category, match.params.id))
                break;
            default:
                this.props.dispatch(fetchMovies(match.params.category))
        }


    }
    componentWillMount(){
        this._loadData()
    }

    componentWillReceiveProps(nextProps){
        const { match } = this.props
        if(match.params.category !== nextProps.match.params.category){
            this._loadData(nextProps)
        }
    }

    render(){
        const {match} = this.props
        const {category } = match.params
        switch(true){
            case /^\/people/.test(match.path):
                return <People {...this.props.entities}/>
            case /^\/shows/.test(match.path):
                return <Shows category={category} {...this.props.entities}/>
            case /^\/genre/.test(match.path):
                return <Genres {...this.props.entities}/>
            default:
                return <Movies category={category} {...this.props.entities}/>
        }
    }
}

export default withRouter(connect((state)=>{ 
    return {
        entities: state.entities,
    }
})(EntityListContainer))
