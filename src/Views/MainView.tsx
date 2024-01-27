import React from 'react';
import Slider from '../Components/Common/Slider';
import ProductsView from '../Components/Products/ProductsView';

const MainView = (): JSX.Element => {
  return (
    <div className="main pt-16">
      <Slider />
      <ProductsView />
    </div>
  );
};

export default MainView;
