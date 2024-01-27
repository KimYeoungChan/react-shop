import axios from 'axios';
import { selector } from 'recoil';
import CONSTANTS from '../Constants/constants';

// export const productsURL = 'src/data/data.json';
export const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;

// 별점
interface IRating {
  readonly rate?: number;
  readonly count?: number;
  readonly value: number;
}

// API 데이터 타입
export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

// 아이템 리스트 가져오기
export const productsApiList = selector<IProduct[]>({
  key: 'productsApiList',
  get: async () => {
    try {
      const data = await axios.get(`${productsURL}`);
      return data.data;
    } catch (error) {
      console.log(`Error fetching data: \n${error}`);
      return [];
    }
  },
});
