import { RiFacebookFill } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';
import '../../assets/css/footer.css';

// TODO : 푸터 바로 위에 배경색 왜 변경 됐는지 확인 해야 함
export default function Footer() {
  return (
    <div className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="https://zero-base.co.kr/" target="_blink" rel="noreferrer noopener external">
          제로베이스
        </a>
      </div>
      <ul className="flex">
        <li>
          <img src="src/assets/visa.svg" alt="Visa" className="icon" />
        </li>
        <li>
          <img src="src/assets/master.svg" alt="Mastercard" className="icon" />
        </li>
        <li>
          <img src="src/assets/americanExpress.svg" alt="American Express" className="icon" />
        </li>
        <li>
          <img src="src/assets/paypal.svg" alt="PayPal" className="icon" />
        </li>
        <li>
          <img src="src/assets/dinersClub.svg" alt="Diners Club" className="icon" />
        </li>
        <li>
          <img src="src/assets/discover.svg" alt="Discover" className="icon" />
        </li>
      </ul>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.facebook.com/0base" rel="noreferrer noopener external" data-tip="facebook" target="_blank" className="tooltip">
            <RiFacebookFill className="toolTipIcon" />
          </Link>
          <Link to="https://www.instagram.com/zerobase.official/" rel="noreferrer noopener external" data-tip="instagram" target="_blank" className="tooltip">
            <BsInstagram className="toolTipIcon" />
          </Link>
          <Link to="https://github.com/IanYoon93/" rel="noreferrer noopener external" data-tip="github" target="_blank" className="tooltip">
            <BsGithub className="toolTipIcon" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2024 Zero Base</p>
      </div>
    </div>
  );
}
