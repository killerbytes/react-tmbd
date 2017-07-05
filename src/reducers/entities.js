export default function reducer(state={
    detail: {
        poster_path: ''
    },
    list: {},
    similar: {},
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_DETAIL": {
            return { ...state, fetching: true}
        }
        case "FETCH_DETAIL_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                detail: action.payload
            }
        }
        case "FETCH_MOVIES": {
            return { ...state, fetching: true}
        }
        case "FETCH_GENRES_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                list: action.payload
            }
        }
        case "FETCH_LIST_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                list: action.payload
            }
        }
        case "FETCH_SIMILAR_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                similar: action.payload
            }
        }
        case "SEARCH_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                search: action.payload
            }
        }
        default: 
            return state
    }
}