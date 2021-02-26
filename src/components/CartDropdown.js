import React from 'react'
import CustomButton from './CustomButton'

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>
      Checkout
    </CustomButton>
  </div>
)

export default CartDropdown;
