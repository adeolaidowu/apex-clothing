import React from 'react'
import { auth } from '../firebase/firebase';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { selectCurrentUser } from '../selectors/user';
import { selectCartHidden } from '../selectors/cart';
import {HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from '../styled-components/header.styles';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';

function Header({currentUser, hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to = "/" >
                <Logo /> 
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink  to="/shop">
                    CONTACT
                </OptionLink>
                {
                    currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> : 
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
                {!hidden && <CartDropdown />}
                </OptionsContainer>
            </HeaderContainer>
    )
}



const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
