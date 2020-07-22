import React from 'react';
import './Sales.scss';
import photo10 from '../img/photo-10.jpeg';
import photo11 from '../img/photo-11.jpeg';
import photo12 from '../img/photo-12.jpeg';
import photo13 from '../img/photo-13.jpeg';
import photo14 from '../img/photo-14.jpeg';
import photo15 from '../img/photo-15.jpeg';
import photo16 from '../img/photo-16.jpeg';

const Sales = () => {
  return (
    <div className='actions'>
      <div className="actions__text">today's sales</div>
      <div className="container">
        <div className="display">
          <img src={photo10} alt="photo10" className="display__image"/>
          <span className="display__text">Mac Book Air 2020</span>
          <div className="display__price">
            <h3>$ 195.00</h3>
            <span>Retail $ 215.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo11} alt="photo11" className="display__image"/>
          <span className="display__text">Nikon D5600 DSLR Camera With 18-55mm Lens - 24.2 MP - Black</span>
          <div className="display__price">
            <h3>$ 99.00</h3>
            <span>Retail $ 101.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo12} alt="photo12" className="display__image"/>
          <span className="display__text">Canon Black Powershot camera G7X-20.2 megapixels</span>
          <div className="display__price">
            <h3>$ 57.00</h3>
            <span>Retail $ 63.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo13} alt="photo13" className="display__image"/>
          <span className="display__text">Infinix NOTE 7, 6.95", 6GB + 128GB (Dual SIM)</span>
          <div className="display__price">
            <h3>$ 21.00</h3>
            <span>Retail $ 22.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo14} alt="photo14" className="display__image"/>
          <span className="display__text">Apple iPhone 11 Pro Max 256GB </span>
          <div className="display__price">
            <h3>$ 168.00</h3>
            <span>Retail $ 174.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo15} alt="photo15" className="display__image"/>
          <span className="display__text">Sony Extra Bass Headphones Wired Headsets</span>
          <div className="display__price">
            <h3>$ 15.00</h3>
            <span>Retail $ 18.00</span>
          </div>
        </div>
        <div className="display">
          <img src={photo16} alt="photo16" className="display__image"/>
          <span className="display__text">Sony Bluetooth Speaker SRS-XB41</span>
          <div className="display__price">
            <h3>$ 295.00</h3>
            <span>Retail $ 310.00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
