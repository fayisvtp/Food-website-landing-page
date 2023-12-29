import React from 'react';
import './Home.css';
import pizza from './images/pizza.png';
import { IoIosArrowForward } from "react-icons/io";
export default function Home() {
  return (
    <div className='home'>
      <div className='row flex-column-reverse flex-md-row'>
        <div className="col-md-7 d-flex align-items-center">
          <div className="heading-texts col-12 p-5">
            <h1 className="d-flex text-light align-items-center ">
Lorem ipsum <br />
Lorem ipsum Dolar
            </h1>
            
            <p className="heding_para text-light">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              nemo cupiditate sapiente magnam vel totam. Ullam et itaque distinctio
    
            </p>
            <div className="heading_buttons d-flex align-items-center">
  <div className="heading_btn-1">
    <p className="explore px-2">
      <span>Explore</span>
      <span><IoIosArrowForward /></span>
      </p>
  </div>

</div>

          </div>
        </div>

        <div className="col-md-5 d-flex justify-content-end align-items-end">
          <div className="col-12 ">
            <img 
              className=' pizza-img img-fluid  '
              src={pizza} 
              alt="pizza" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
