import {combineReducers} from 'redux';
import CounterReducer from './counterReducer';

const allreducer = combineReducers({
    counter: CounterReducer
})

export default allreducer;