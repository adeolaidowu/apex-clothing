import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; // input selector takes in the state and returns a portion/slice of it

// output selector - takes in an array of input selectors and a fn that returns the manipulated state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
 );

 export const selectCartHidden = createSelector(
   [selectCart],
   (cart => cart.hidden)
 )

 export const selectCartTotal = createSelector(
   [selectCartItems],
   (cartItems) => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) 
 )

 export const selectCartItemsCount = createSelector(
   [selectCartItems],
   (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
 )

