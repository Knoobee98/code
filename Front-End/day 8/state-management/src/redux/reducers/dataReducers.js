let InitialState = {
    data: [],
    message: ''
}

function DataReducer(state = InitialState, action) {
    switch(action.type){
        case 'GET_DATA_SUCCESS':
            return{...state, data: action.payload }
        
        case 'GET_DATA_ERROR':
            return{...state, message: action.payload }
        default: 
            return state
    }
}

export default DataReducer