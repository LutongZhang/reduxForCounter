import { createStore, combineReducers } from "redux";
import { ADD, DECREASE, addCount, decreaseCount, MULTIPLE, multipleCount } from './action'

const initialState = {
    count: 0
}

const reducer1 = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: action.Count }
        case DECREASE:
            return { count: action.Count }
        default:
            return state
    }
}

const secondState = {
    count: 1,
}
const reducer2 = (state = secondState, action) => {
    switch (action.type) {
        case MULTIPLE:
            return { count: action.Count }
        default:
            return state
    }
}

const store = createStore(combineReducers({ reducer1, reducer2 }))

export default store