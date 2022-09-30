import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className='items-footer'>
        <span className='title'>Pufi</span>

        <ul>
          <li>PUFI RAIN</li>
          <li>PUFI PUFF</li>
          <li>PUFI CART</li>
          <li>PUFI NAP</li>
        </ul>

        <ul>
          <li>CONTACTO</li>
          <li>AYUDA</li>
          <li>COMO COMPRAR</li>
          <li>TÉRMINOS & CONDICIONES</li>
        </ul>


        <ul>
          <span>COMPRA 100% SEGURA</span>
          <li>imagen1</li>
          <li>imagen2 </li>
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
