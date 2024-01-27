import { atom } from 'recoil';

// 모드 디폴트 값 지정
export const themeState = atom({
  key: 'themeState',
  default: 'dark',
});
