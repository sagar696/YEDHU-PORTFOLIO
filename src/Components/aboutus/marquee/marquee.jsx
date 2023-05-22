import React, { useRef, useEffect } from 'react';
import './marquee.css';

const Marquee =() =>{
  return(
    <>
    <div className="container">
      <center className='marquee_center'>
        <span className="sub_title_marquee" stylestyle={{fontWeight:"300",color:"#fff"}}>Our <span style={{fontWeight:"800"}}>Clients</span></span>
      </center>
    </div>
    <div className="marquee_group">
      <div></div>

    </div>
    </>
  )
}

export default Marquee;