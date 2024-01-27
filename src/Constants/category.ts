export const Category = {
  "men's clothing": '패션',
  "women's clothing": '패션',
  electronics: '디지털',
  jewelry: '액세서리',
} as const;

export const ProductCategoryEnum = {
  FASHION: { cat: 'fashion', title: '패션', list: ["men's clothing", "women's clothing"] } as const,
  ACCESSORY: { cat: 'jewelry', title: '액세서리', list: ['jewelry'] } as const,
  DIGITAL: { cat: 'electronics', title: '디지털', list: ['electronics'] } as const,
} as const;

export const MENUS = {
  FASHION: '패션',
  ACCESSORY: '액세서리',
  DIGITAL: '디지털',
} as const;

export type CategoryType = (typeof Category)[keyof typeof Category];

// import { useRecoilValueLoadable } from 'recoil';

// TODO: 렌더링

// const productsLoadable = useRecoilValueLoadable(productsList);

// switch (productsLoadable.state) {
//   case 'hasValue':
//     const products = productsLoadable.contents;
//     // 렌더링에 사용할 코드
//     break;
//   case 'loading':
//     // 로딩 중 UI 렌더링
//     break;
//   case 'hasError':
//     console.error('Error loading products:', productsLoadable.contents);
//     // 에러 처리 UI 렌더링
//     break;
// }
