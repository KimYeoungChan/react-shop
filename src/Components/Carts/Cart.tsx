import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '../../Store/Store';

interface CartProps {
  cartItems: IProduct[];
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: number) => void;
}

// TODO : 버튼 클릭시 뱃지 카운터 증가, 모달,
const Cart = ({ cartItems, addToCart, removeFromCart }: CartProps): JSX.Element => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.rating.value * item.price, 0).toFixed(2);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 className="text-2xl">장바구니에 물품이 없습니다.</h2>
      ) : (
        <div className="lg:flex justify-between mb-20">
          {cartItems.map((item) => (
            <div key={item.id} className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
              <Link to={`product/${item.id}`}>
                <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                  <img src={item.image} alt={item.title} className="object-contain w-full h-48" />
                </figure>
              </Link>
              <div className="card-body px-1 lg:px-12">
                <h2 className="card-title">
                  <Link to={`product/${item.id}`} className="link link-hover">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-2 mb-4 text-3xl">
                  ${(item.rating.value * item.price).toFixed(2)}
                  <span className="text-2xl">(${item.price})</span>
                </p>
                <div className="card-actions">
                  <div className="btn-group">
                    <button className="btn btn-primary" onClick={() => removeFromCart(item.id)}>
                      -
                    </button>
                    <button className="btn btn-ghost no-animation">{item.rating.value}</button>
                    <button className="btn btn-primary" onClick={() => addToCart(item)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="self-start shrink-0 flex items-center mt-10 mb-20">
            <span className="text-xl md:text-2xl">총 : ${calculateTotal()}</span>
            <Link to="/" className="modal-button btn btn-primary ml-5">
              구매하기
            </Link>
          </div>
        </div>
      )}
      <Link to="/" className="btn btn-primary mt-10">
        담으러 가기
      </Link>
    </div>
  );
};

export default Cart;
