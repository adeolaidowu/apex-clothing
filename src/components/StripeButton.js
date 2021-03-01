import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IQ9mRJ0NoCu8ezPJWxebntHgMPLTrxvkBWlYqoEEhVO8VPnNphWbE8WIxbISn5R2KCEeX3xUmHERiim32hU2hVs00VywSBbQN";

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="APEX Clothing Inc."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;