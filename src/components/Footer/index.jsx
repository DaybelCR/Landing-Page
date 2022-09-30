import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <div className='items-footer'>
        <button className='title' onClick={()=>{ navigate('/')
          window.scroll(0, 0);}}>Pufi</button>

        <ul>
          <li><a href='#rain'>PUFI RAIN</a></li>
          <li><a href='#puff'>PUFI PUFF</a></li>
          <li><a href='#cart'>PUFI CART</a></li>
          <li><a href='#nap'>PUFI NAP</a></li>
        </ul>

        <ul>
          <li>CONTACTO</li>
          <li>AYUDA</li>
          <li>COMO COMPRAR</li>
          <li>TÉRMINOS & CONDICIONES</li>
        </ul>


        <ul>
          <li>COMPRA 100% SEGURA</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg><span>COMPRA CON LA GRANTÍA DE PUFI</span></li>
        </ul>

        <ul className='brands'><span>SEGUINOS EN</span>
          <li> <FontAwesomeIcon className='icon' icon={faFacebookF} size="lg" /></li>
          <li><FontAwesomeIcon className='icon' icon={faTwitter} size="lg" /></li>
          <li><FontAwesomeIcon className='icon' icon={faInstagram} size="lg" /></li>
        </ul>
      </div>
      <div className='copyright'>
        <span>PUFI Copyright 2022-Todos los derechos reservados</span>
      </div>
    </footer>
  )
}
