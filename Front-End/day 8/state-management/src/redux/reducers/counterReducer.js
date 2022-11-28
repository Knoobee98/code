let initialState = {
    number: 0,
    username: '',
}

function CounterReducer(state= initialState, action) {
    switch(action.type){
        case 'INCREMENT':
            return{...state, number: state.number + 1}

        case 'DECREMENT':
            return{...state, number: state.number - 1}

        case 'Signin': 
            return{...state, username: action.payload.username}

        default:
            return state
    }
}

export default CounterReducer