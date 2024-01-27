import React from 'react';
import { IProduct } from '../../Store/Store';
import ProductItem from './ProductItem';
import '../../assets/css/mainProduct.css';

interface ProductListProps {
  productsAip: IProduct[];
}

const MainProductList = ({ productsAip }: ProductListProps): JSX.Element => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
      {productsAip.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainProductList;
