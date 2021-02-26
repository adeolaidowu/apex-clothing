import { combineReducers } from 'redux';
import CartReducer from './cart';
import userReducer from './user';

export default combineReducers({
  user: userReducer,
  cart: CartReducer
});