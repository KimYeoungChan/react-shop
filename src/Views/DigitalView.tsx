import React from 'react';
import BreadCrumbs from '../Components/Common/BreadCrumbs';
import ProductList from '../Components/Products/ProductList';
import { useRecoilValue } from 'recoil';
import { IProduct, productsApiList } from '../Store/Store';

const DigitalView = (): JSX.Element => {
  const apiProduct = useRecoilValue(productsApiList);

  // 카테고리 필터
  const filterDigitalByCategory = (): IProduct[] => {
    return apiProduct.filter((product) => product.category === 'electronics');
  };

  const digitalProducts = filterDigitalByCategory();

  return (
    <div className="main pt-16">
      <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <BreadCrumbs currentPage="디지털" />
        <div className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
          <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">디지털</h2>
          <ProductList productsAip={digitalProducts} />
        </div>
      </section>
    </div>
  );
};

export default DigitalView;
