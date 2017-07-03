export default function reducer(state={
    movie: [],
    tv: [],
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
        case "FETCH_GENRE_LIST_FULFILLED": {
            return {
                ...state, 
                fetching: false,
                fetched: true,
                movie: action.payload.genres
            }
        }
        default: 
            return state
    }
}