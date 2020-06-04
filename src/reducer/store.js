import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import allreducer from './allreducer';

// const store = createStore(allreducer);
const store = compose(applyMiddleware(thunk))(createStore)(allreducer);
export default store;
