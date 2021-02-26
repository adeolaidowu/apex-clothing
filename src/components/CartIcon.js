import React from 'react';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../redux/actions/cart';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
  <div className="cart-icon" onClick={ toggleCartHidden }>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{total}</span>
  </div>
)};

const mapStateToProps = ({cart: {cartItems }}) => ({
  cartItems
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);