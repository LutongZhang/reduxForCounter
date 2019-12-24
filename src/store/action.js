export let ADD = 'ADD COUNT'
export let DECREASE = 'DECREASE COUNT'

export let addCount = (count) => {
    return {
        type: ADD,
        Count: count
    }
}

export let decreaseCount = (count) => {
    return {
        type: DECREASE,
        Count: count
    }
}

