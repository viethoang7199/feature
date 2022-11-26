import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';


const composeEnhancer = composeWithDevTools();

const store = createStore(rootReducer, composeEnhancer)

export default store;