import { createStore, applyMiddleware } from 'redux';
import { userListReducer } from './reduce/UserReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reduce/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;