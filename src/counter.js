import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCount, decreaseCount, multipleCount } from './store/action'


let Counter = (props) => {

    return (
        <div>
            <h1>Cunter1</h1>
            <div>value is {props.count1}</div>
            <button onClick={() => props.onIncrementClick(props.count1 + 1)}>add</button>
            <button onClick={() => props.onIncrementClick(props.count1 - 1)}>decrease</button>
            <br />
            <br />
            <h1>Cunter2</h1>
            <div>value is {props.count2}</div>
            <button onClick={() => props.onMultipleClick(props.count2 * 2)}>multiple2</button>

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
        },
        onMultipleClick: (count) => {
            dispatch(multipleCount(count))
        }
    }
}

export default connect(state => { return { count1: state.reducer1.count, count2: state.reducer2.count } }, mapDispatchToProps)(Counter)