import axios from 'axios'
import { apiUrl, apiKey } from '../constants/Config'

export function fetchMovie(id){
    return function(dispatch){
        dispatch({
            type: "FETCH_DETAIL"
        })
        
        axios.get(`${apiUrl}/movie/${id}?${apiKey}&language=en-US&append_to_response=credits,similar`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_DETAIL_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchMovies(category, page=1){
    return function(dispatch){
        axios.get(`${apiUrl}/movie/${category}?${apiKey}&language=en-US&page=${page}`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_LIST_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchSimilar(id, page=1){
    return function(dispatch){
        axios.get(`${apiUrl}/movie/${id}/similar?${apiKey}&language=en-US&page=1`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_SIMILAR_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchShow(id){
    return function(dispatch){
        dispatch({ type: "FETCH_DETAIL" })
        axios.get(`${apiUrl}/tv/${id}?${apiKey}&language=en-US&append_to_response=credits`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_DETAIL_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
}

export function fetchShows(category, page=1){
    console.log(category)
    return function(dispatch){
        axios.get(`${apiUrl}/tv/${category}?${apiKey}&language=en-US&page=${page}`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_LIST_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchPerson(id){
    return function(dispatch){
        dispatch({ type: "FETCH_DETAIL" })
        axios.get(`${apiUrl}/person/${id}?${apiKey}&language=en-US&append_to_response=movie_credits,tv_credits`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_DETAIL_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
        
    }
}

export function fetchPeople(category, page=1){
    return function(dispatch){
        axios.get(`${apiUrl}/person/${category}?${apiKey}&language=en-US&page=${page}`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_LIST_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export function fetchGenres(category, id, page=1){
    return function(dispatch){
        axios.get(`${apiUrl}/genre/${id}/${category}?${apiKey}&language=en-US&page=${page}`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_GENRES_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

function fetchGenreList(category){
    console.log('fetchGenres')
    return function(dispatch){
        axios.get(`${apiUrl}/genre/${category}/list?${apiKey}&language=en-US`)
            .then(function (res) {
                dispatch({
                    type: "FETCH_GENRE_LIST_FULFILLED",
                    payload: res.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

const shouldFetchPosts = (state, category) => {
  const genres = state.genres[category]
  if (genres.length === 0) {
    return true
  }
}

export function fetchGenresIfNeeded (category){
    return function(dispatch, getState){
        if(shouldFetchPosts(getState(), category)){

            return dispatch( fetchGenreList(category) )
        }
    }
}

export function search(query, page=1){
    return function(dispatch){
        axios.get(`${apiUrl}/search/multi?${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`)
        .then(function(res){
            dispatch({
                type: "SEARCH_FULFILLED",
                payload: res.data
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
}