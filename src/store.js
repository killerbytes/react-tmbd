import { compose, applyMiddleware, createStore } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleware = applyMiddleware(thunk)


    // const store = compose(autoRehydrate(), middleware)(createStore)(reducers);
    // persistStore(store);

// export default store;
export default createStore(reducers, middleware)