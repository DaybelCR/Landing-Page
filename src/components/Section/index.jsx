import React from 'react';
import img from '../../assets/img-rain.jpg';
import img2 from '../../assets/img-puff.jpg';
import img3 from '../../assets/img-cart.jpg';
import img4 from '../../assets/img-nap.jpg';
import img5 from '../../assets/mini-img/img.jpg';
import mini from '../../assets/mini-img/sombrilla.jpg';
import mini2 from '../../assets/mini-img/sofa.jpg';
import mini3 from '../../assets/mini-img/carteras.jpg';
import mini4 from '../../assets/mini-img/cojin.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight,faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "./Section.css";

export default function Section() {
  return (
    <>
    <section className='rain'>
        <img src={img} alt='rain'/>
        <div className='description'>
            <img src={mini} alt='sombrilla'/>
            <h4>PUFI RAIN</h4>
            <p>Descripción del producto.Este es un texto simulado</p>
            <button><FontAwesomeIcon  icon={faAngleDoubleRight} size="lg"/>VER MÁS</button>
        </div>
    </section>
    <section className='puff'>
        <div className='description'>
        <img src={mini2} alt='sofa'/>
            <h4>PUFI PUFF</h4>
            <p>Descripción del producto.Este es un texto simulado</p>
            <button><FontAwesomeIcon  icon={faAngleDoubleRight} size="lg"/>VER MÁS</button>
        </div>
        <img src={img2} alt='puff'/>
    </section>
    <section className='cart'>
        <img src={img3} alt='cart'/>
        <div className='description'>
        <img src={mini3} alt='carteras'/>
            <h4>PUFI CART</h4>
            <p>Descripción del producto.Este es un texto simulado</p>
            <button><FontAwesomeIcon  icon={faAngleDoubleRight} size="lg"/>VER MÁS</button>
        </div>
    </section>
    <section className='nap'>
        <div className='description'>
        <img src={mini4} alt='cojin'/>
            <h4>PUFI RAIN</h4>
            <p>Descripción del producto.Este es un texto simulado</p>
            <button><FontAwesomeIcon  icon={faAngleDoubleRight} size="lg"/>MÁS INFO</button>
        </div>
        <img src={img4} alt='nap'/>
    </section>
    <section className='instagram'>
        <div className='title-instagram'>
            <h4>INSTAGRAM</h4>
            <span>#ESPUFI</span>
        </div>
        <div className='galeria'>
            <img src={img2}/>
            <img src={img}/>
            <img src={img4}/>
            <img src={mini}/>
            <img src={img3}/>
            <img src={img5}/>
        </div>
    </section>
    <section className='form'>
        <div className='news-letter'>
            <span>NEWSLETTER</span>
            <h3>SUSCRÍBETE</h3>
            <h5>Y enterate de todas las novedades</h5>
        </div>
         <form action="">
            <input type="text" placeholder='Ingresa tu email' />
            <button type='submit'><FontAwesomeIcon  icon={faArrowRight} size="lg"/></button>
         </form>
    </section>
    </>
  )
}
