export let ADD = 'ADD COUNT'
export let DECREASE = 'DECREASE COUNT'

export let MULTIPLE = 'MUTIPLE COUNT'

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

export let multipleCount = (count) => {
    return {
        type: MULTIPLE,
        Count: count
    }
}

