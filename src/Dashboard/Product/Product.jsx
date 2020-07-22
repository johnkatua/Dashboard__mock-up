import React from 'react';
import './Product.scss';
import  photo4  from '../img/photo-4.webp';
import  photo5  from '../img/photo-5.webp';
import  photo6  from '../img/photo-6.webp';
import  photo7  from '../img/photo-7.webp';
import  photo8  from '../img/photo-8.webp';
import  photo9  from '../img/photo-9.webp';

const Product = () => {
  return (
    <div className='product'>
      <div className='images'>
        <div className='photo'>
          <img src={photo4} alt="" className="photo__item"/>
          <h2 className="photo__title">Laptops</h2>
        </div>
        <div className='photo'>
          <img src={photo5} alt="" className="photo__item"/>
          <h2 className="photo__title">Phones</h2>
        </div>
        <div className='photo'>
          <img src={photo6} alt="" className="photo__item"/>
          <h2 className="photo__title">Cameras</h2>
        </div>
        <div className='photo'>
          <img src={photo7} alt="" className="photo__item"/>
          <h2 className="photo__title">Drones</h2>
        </div>
        <div className='photo'>
          <img src={photo8} alt="" className="photo__item"/>
          <h2 className="photo__title">Headphones</h2>
        </div>
        <div className='photo'>
          <img src={photo9} alt="" className="photo__item"/>
           <h2 className="photo__title">Speakers</h2>
        </div>
      </div>
    </div>
  )
}

export default Product;
