import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const composeEnhancer = composeWithDevTools();
const initValue = {
    totalMoney: 10000,
}


const store = createStore(rootReducer, initValue, composeEnhancer)

export default store;