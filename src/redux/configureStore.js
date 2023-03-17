import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import ListsReducer from './List/List';
import DetailsReducer from './Details/Details';

const rootReducer = combineReducers({
  ListsReducer,
  DetailsReducer,
});
const store = createStore(
  rootReducer, applyMiddleware(logger, thunk),
);
export default store;
