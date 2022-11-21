import rootReducer from './reducer';
import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const composeEnhancer = composeWithDevTools();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancer
);
store.subscribe(() => saveState(store.getState()));
export default store;