import { Link } from 'react-router-dom';
import '../../assets/css/product.css';
import React from 'react';
import { IProduct } from '../../Store/Store';

interface ProductItemProps {
  product: IProduct;
}

// TODO : 상세페이지로 각 제품 id에 맞춰서 제대로 가게 구현 해야함
const ProductItem = ({ product }: ProductItemProps): JSX.Element => {
  return (
    <Link to={`product/${product.id}`} key={product.id} className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal">
      <figure className="flex h-80 bg-white overflow-hidden">
        <img src={product.image} className="transition-transform duration-300" alt={product.title} />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{product.title}</p>
        <p className="text-base">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
