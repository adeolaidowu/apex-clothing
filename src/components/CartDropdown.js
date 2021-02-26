import React from 'react'
import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { selectCartItems } from '../selectors/cart';
import CartItem from './CartItem';

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>
      Checkout
    </CustomButton>
  </div>
)
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
