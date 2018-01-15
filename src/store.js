import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';


export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
