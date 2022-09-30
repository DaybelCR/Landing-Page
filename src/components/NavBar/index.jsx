import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella , faBed ,faBagShopping ,faMattressPillow, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <h1>Pufi</h1>
        <ul className='button-nav'>
        <li ><FontAwesomeIcon className='icon' icon={faBed} size="lg"/><span>PUFI PUFF</span></li>
        <li><FontAwesomeIcon className='icon' icon={faUmbrella } size="lg"/><span>PUFI RAIN</span></li>
        <li><FontAwesomeIcon className='icon' icon={faBagShopping } size="lg"/><span>PUFI CART</span></li>
        <li><FontAwesomeIcon className='icon' icon={faMattressPillow } size="lg"/><span>PUFI NAP</span></li>
        </ul>
        <header>
            <ul>
                <li><span>Mi cuenta</span><FontAwesomeIcon className='icon' icon={faAngleDown} size="lg"/></li>
                <li>Mi compra</li>
            </ul>
        </header>
    </nav>
  )
}
