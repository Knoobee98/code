import {combineReducers} from 'redux';
import CounterReducer from './counterReducer';
import dataReducer from './dataReducers';

const allreducer = combineReducers({
    counter: CounterReducer,
    dataReducer: dataReducer
})

export default allreducer;