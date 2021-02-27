import { addItemToCart, removeItemFromCart } from '../../utils/cart';

const DEFAULT_STATE = {
  hidden: true,
  cartItems: []
};

const CartReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state;
  }
}

export default CartReducer;