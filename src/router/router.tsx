import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainView from '../Views/MainView';
import FashionView from '../Views/FashionView';
import AccessoryView from '../Views/AccessoryView';
import DigitalView from '../Views/DigitalView';
import ErrorView from '../Views/ErrorView';
import CartView from '../Components/Carts/CartView';
import ProductDetailed from '../Components/Products/ProductDetailed';
import { IProduct } from '../Store/Store';

interface Props {
  item: IProduct;
}

// TODO : 상세페이지 구현!
const Router = ({ item }: Props): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/fashion" element={<FashionView />} />
      <Route path="/accessory" element={<AccessoryView />} />
      <Route path="/digital" element={<DigitalView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/product/:productId" element={<ProductDetailed product={item} />} />
      <Route path="*" element={<ErrorView />} />
    </Routes>
  );
};

export default Router;
