import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import auth from './redux/userReducer';
import thunk from 'redux-thunk';
const middleware = [thunk];
const initialState = {};

const rootReducer = combineReducers({
    auth
});
const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
);
export default store;