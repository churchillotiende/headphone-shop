import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'; 

import Cart from './Cart';

import { useStateContext } from '../context/StateContext';

const Navbar = () => {

  const {showCart, setShowCart , totalQuantities} = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">oteemedia shop</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <ShoppingBasketIcon />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar