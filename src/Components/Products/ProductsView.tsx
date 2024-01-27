import React from 'react';
import { useRecoilValue } from 'recoil';
import { IProduct, productsApiList } from '../../Store/Store';
import MainProductList from './MainProductList';

// TODO : 코드 가독성, 간결성 고민해서 리팩토링하기 (제품 관련 파일 전부)
const ProductsView = (): JSX.Element => {
  const apiProduct = useRecoilValue(productsApiList);

  const filterFashionByCategory = (): IProduct[] => {
    return apiProduct.filter((product) => product.category === "men's clothing" || product.category === "women's clothing").slice(0, 4);
  };
  const filterJewelryByCategory = (): IProduct[] => {
    return apiProduct.filter((product) => product.category === 'jewelery').slice(0, 4);
  };
  const filterDigitalByCategory = (): IProduct[] => {
    return apiProduct.filter((product) => product.category === 'electronics').slice(0, 4);
  };

  const fashionProducts = filterFashionByCategory();
  const jewelryProducts = filterJewelryByCategory();
  const digitalProducts = filterDigitalByCategory();

  return (
    <>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
        <MainProductList productsAip={fashionProducts} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">액세서리</h2>
        <MainProductList productsAip={jewelryProducts} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto digital">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">디지털</h2>
        <MainProductList productsAip={digitalProducts} />
      </section>
    </>
  );
};

export default ProductsView;
