import React, { useState } from 'react';
import BreadCrumbs from '../Common/BreadCrumbs';
import Cart from './Cart';
import { IProduct } from '../../Store/Store';

const CartView = (): JSX.Element => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (clickedItem: IProduct) => {
    setCart((prevCart) => [...prevCart, clickedItem]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // TODO : 추후 상세페이지 구현하고 레이아웃 및 기능 구현해야함 (모달, 뱃지 카운터)
  return (
    <section className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs currentPage="장바구니" />
        <Cart cartItems={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      </section>
    </section>
  );
};

export default CartView;
