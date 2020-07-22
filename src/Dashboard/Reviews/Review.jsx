import React from 'react';
import './Review.scss';
import user1 from '../img/user-1.webp';
import user2 from '../img/user-2.webp';
import user3 from '../img/user-3.webp';
import user4 from '../img/user-4.webp';

const Reviews = () => {
  return (
    <div className='review'>
      <div className='review__text'>Collect Reviews</div>
      <div className="rating">
         <div className="rating__description">
           <img src={user1} alt="user1" className="rating__photo"/>
           <div className="rating__detail">
             <span className='rating__detail--star'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
             <span className='rating__detail--question'>&#63;</span>
             <p className='rating__detail--paragraph'>You can use characther entity references to create either a black star or white star. You can use either the entity number or its name.</p>
           </div>
         </div>
         <div className="rating__description">
           <img src={user2} alt="user2" className="rating__photo"/>
           <div className="rating__detail">
             <span className='rating__detail--star'>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
             <span className='rating__detail--question'>&#63;</span>
             <p className='rating__detail--paragraph'>You can use characther entity references to create either a black star or white star. You can use either the entity number or its name.</p>
           </div>
         </div>
         <div className="rating__description">
           <img src={user3} alt="user3" className="rating__photo"/>
           <div className="rating__detail">
             <span className='rating__detail--star'>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
             <span className='rating__detail--question'>&#63;</span>
             <p className='rating__detail--paragraph'>You can use characther entity references to create either a black star or white star. You can use either the entity number or its name.</p>
           </div>
         </div>
         <div className="rating__description">
           <img src={user4} alt="user4" className="rating__photo"/>
           <div className="rating__detail">
             <span className='rating__detail--star'>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
             <span className='rating__detail--question'>&#63;</span>
             <p className='rating__detail--paragraph'>You can use characther entity references to create either a black star or white star. You can use either the entity number or its name.</p>
           </div>
         </div>
      </div> 
    </div>
  )
}

export default Reviews;
