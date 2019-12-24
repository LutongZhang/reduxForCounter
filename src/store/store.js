import { createStore } from "redux";
import { ADD, DECREASE, addCount, decreaseCount } from './action'

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return { count: action.Count }
        case DECREASE:
            return { count: action.Count }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store