import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCount, decreaseCount } from './store/action'


let Counter = (props) => {
    return (
        <div>
            <h1>Cunter</h1>
            <div>value is {props.count}</div>
            <button onClick={() => props.onIncrementClick(props.count + 1)}>add</button>
            <button onClick={() => props.onIncrementClick(props.count - 1)}>decrease</button>
        </div>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrementClick: (count) => {
            dispatch(addCount(count))
        },
        onDecreaseClick: (count) => {
            dispatch(decreaseCount(count))
        }
    }
}

export default connect(state => state, mapDispatchToProps)(Counter)