import React from 'react'
import CustomButton from './CustomButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../selectors/cart';
import { toggleCartHidden } from '../redux/actions/cart';
import { CartDropdownContainer, CartItemsContainer } from '../styled-components/cartdropdown.styles';
import CartItem from './CartItem';

const CartDropdown = ({cartItems, history, dispatch}) => (
<CartDropdownContainer>
  <CartItemsContainer>
    {
      cartItems.length ?
      cartItems.map(cartItem => (
      <CartItem key={cartItem.id} item={cartItem} />
    )):
      <span className="empty-message">Your cart is empty</span>
    }
  </CartItemsContainer>
  <CustomButton onClick={() => {
    history.push('/checkout')
    dispatch(toggleCartHidden())
  }}>
    Checkout
  </CustomButton>
</CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
