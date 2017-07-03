export default function reducer(state={
    search: {},
    fetching: false,
    fetched: false,
    error: null
}, action){
    switch(action.type){
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