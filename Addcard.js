import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart  from './Cart';
import { CartProvider } from 'react-use-cart';
import Dash from './Dash';

const Addcard = () => {
  return (
    <CartProvider>
         <Dash />
         <Cart/>
      </CartProvider>
  )
}

export default Addcard;