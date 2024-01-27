import React from 'react';
import ProductList from '../Components/Products/ProductList';
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import { IProduct, productsApiList } from '../Store/Store';
import { useRecoilValue } from 'recoil';
import '../assets/css/product.css';

const FashionView = (): JSX.Element => {
  const apiProduct = useRecoilValue(productsApiList);

  // TODO : 카테고리 필터
  const filterFashionByCategory = (): IProduct[] => {
    return apiProduct.filter((product) => product.category === "men's clothing" || product.category === "women's clothing");
  };

  const fashionProducts = filterFashionByCategory();

  return (
    <div className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs currentPage="패션" />
        <div className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
          <ProductList productsAip={fashionProducts} />
        </div>
      </section>
    </div>
  );
};

export default FashionView;
