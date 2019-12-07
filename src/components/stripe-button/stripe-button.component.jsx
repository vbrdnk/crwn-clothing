import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import env from '../../.env';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_nXHz3Kp536hV4DxznWYTUixE009QSVwRAb';


  const onTokenPassed = token => {
    console.log(token);
    alert('Your payment is successful');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onTokenPassed}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
