import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Movies from '../components/Movies';
import Shows from '../components/Shows';
import People from '../components/People';
import Genres from '../components/Genres';

import { fetchMovies, fetchShows, fetchGenres, fetchPeople } from '../actions/entityActions'



class EntityListContainer extends Component {
    _loadData =(params=this.props.match.params)=>{
        const {match} = this.props
        switch(true){
            case /^\/people/.test(match.path):
                this.props.dispatch(fetchPeople(params.category))
                break;
            case /^\/shows/.test(match.path):
                this.props.dispatch(fetchShows(params.category))
                break;
            case /^\/genre/.test(match.path):
                console.log(match)
                // this.props.dispatch(fetchGenres(params.category, params.id))
                break;
            default:
                this.props.dispatch(fetchMovies(params.category))
        }


    }
    componentWillMount(){
        this._loadData()
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.match.params, this.props.match.params)
        const { match } = this.props
        if(match.params.category !== nextProps.match.params.category){
            this._loadData(nextProps.match.params)
        }
    }

    render(){
        const {match} = this.props
        switch(true){
            case /^\/people/.test(match.path):
                return <People {...this.props.entities}/>
            case /^\/shows/.test(match.path):
                return <Shows {...this.props.entities}/>
            case /^\/genre/.test(match.path):
                return <Genres {...this.props.entities}/>
            default:
                return <Movies {...this.props.entities}/>
        }
    }
}

export default withRouter(connect((state)=>{ 
    return {
        entities: state.entities,
    }
})(EntityListContainer))
