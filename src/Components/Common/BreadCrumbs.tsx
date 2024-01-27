import React from 'react';

interface BreadCrumbsProps {
  currentPage: string;
}

// TODO : 상세페이지에서 제대로 불러오도록 구현하고 전체 페이지 수정해야함
const BreadCrumbs = ({ currentPage }: BreadCrumbsProps): JSX.Element => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>홈</li>
        {currentPage === '장바구니' ? <li>장바구니</li> : <li>{[currentPage]}</li>}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
