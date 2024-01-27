import React from 'react';
import BreadCrumbs from '../Common/BreadCrumbs';
import { Link } from 'react-router-dom';
import '../../assets/css/product.css';
import { IProduct } from '../../Store/Store';
import Rating from '../Common/Rating';

interface ProductDetailedProps {
  product: IProduct;
}

// TODO : 상태 값 저장 확인하고 버튼 기능 추가, 브래드크럼브 제대로 나오게 구현 해야 함
console.log('왜 갑자기 밑에가 안나오지?????');

const ProductDetailed = ({ product }: ProductDetailedProps): JSX.Element => {
  console.log(product);
  return (
    <div className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs currentPage="product" />
        <div className="lg:flex lg:products-center mt-6 md:mt-14 px-2 lg:px-0" key={product.id}>
          <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
            <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
          </figure>
          <div className="card-body px-1 lg:px-12">
            <h2 className="card-title">
              {product.title}
              <span className="badge badge-accent ml-2">NEW</span>
            </h2>
            <p>{product.description}</p>
            <Rating rate={product.rating?.rate} count={product.rating?.count} />
            <p className="mt-2 mb-4 text-3xl">${product.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">장바구니에 담기</button>
              <Link to="/cart" className="btn btn-outline ml-1">
                장바구니로 이동
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailed;
