import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import MovieDetail from '../components/MovieDetail.js'
import ShowDetail from '../components/ShowDetail.js'
import PersonDetail from '../components/PersonDetail.js'

import { fetchMovie, fetchPerson, fetchShow } from '../actions/entityActions'


class EntityContainer extends Component {
    _loadData =(params = this.props.match.params)=>{
        switch(params.entity){
            case 'person':
                this.props.dispatch(fetchPerson(params.id, params.entity))
                break;
            case 'tv':
                this.props.dispatch(fetchShow(params.id))
                break;
            default:
                this.props.dispatch(fetchMovie(params.id))
        }

    }
    componentWillMount(){
        this._loadData()
    }
    componentWillReceiveProps(nextProps){
        const { match } = this.props
        
        if(match.params.id !== nextProps.match.params.id){
            this._loadData(nextProps.match.params)
        }
    }
    
    render(){
        const {match } = this.props
        switch(match.params.entity){
            case 'person':
                return <PersonDetail {...this.props.entities}/>
            case 'tv':
                return <ShowDetail {...this.props.entities}/>
            default: 
                return <MovieDetail {...this.props}/>
        }
    }
}

export default withRouter(connect((state)=>{ 
    return {
        entities: state.entities,
        genres: state.genres,
        search: state.search,
}})(EntityContainer))
