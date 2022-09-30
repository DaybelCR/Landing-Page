import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella , faBed ,faBagShopping ,faMattressPillow, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import "./Nav.css";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
       <button onClick={()=>{ navigate('/')
          window.scroll(0, 0);}}>Pufi</button>
        <ul className='button-nav'>
        <li ><a href='#puff'><FontAwesomeIcon className='icon' icon={faBed} size="lg"/><span>PUFI PUFF</span></a></li>
        <li><a href='#rain'><FontAwesomeIcon className='icon' icon={faUmbrella } size="lg"/><span>PUFI RAIN</span></a></li>
        <li><a href='#cart'><FontAwesomeIcon className='icon' icon={faBagShopping } size="lg"/><span>PUFI CART</span></a></li>
        <li><a href='#nap'><FontAwesomeIcon className='icon' icon={faMattressPillow } size="lg"/><span>PUFI NAP</span></a></li>
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
