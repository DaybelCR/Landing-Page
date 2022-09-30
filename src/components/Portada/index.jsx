import React, { useState } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img-puff.jpg';
import img3 from '../../assets/img-cart.jpg';
import "./Portada.css";


export default function Portada() {
 const [index,setIndex]=useState(0);
const images=[img1,img2,img3];
// React.useEffect(()=>{
//   const interval = setInterval(() => {
//     if(index<=0){
//       return setIndex(index+1)
//     }else if(index===images.length){
//       return setIndex(index-1)
//     }
//   }, 5000);                          
//   return () => clearInterval(interval);
// },[images.length,index])


   return (
    <main className='portada'>
      <div className='title-portada'>
      <h3>Estar cómodo, nunca fue tán fácil</h3>
      </div>
      <img src={images[index]} alt='product'/>
      <div className='dots'>
      {images.length?images.map((el,ind)=>(
        <button key={ind} className={index===ind?'dot active':'dot'} onClick={()=>setIndex(ind)}></button>
      )):
      null}
      </div>
     
    </main>
  )
}
