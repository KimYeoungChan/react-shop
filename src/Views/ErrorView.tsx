import { Link } from 'react-router-dom';
import React from 'react';

export default function ErrorView() {
  return (
    <section className="main pt-16">
      <h2 className="mt-20 sm:mt-28 text-center text-4xl sm:text-9xl font-bold">404</h2>
      <p className="mt-4 mb-5 sm:mb-10 text-center text-lg sm:text-3xl">페이지를 찾을 수 없습니다.</p>
      <div className="text-center">
        <Link to="/" className="btn btn-md sm:btn-lg btn-primary sm:w-40">
          메인으로
        </Link>
      </div>
    </section>
  );
}
