import React from "react";
import './contactus.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const handleDropdownSelect = (eventKey) => {
    // Handle the dropdown select event here
    console.log('Selected option:', eventKey);
  };
  
const Contactus = () =>{
    return(
      <div className="container">
        <div className="contactus_title">
            <span style={{justifyContent:"center",display:"flex",color:"#fff",fontSize:"60px",fontWeight:"800"}}>Contact <span style={{fontWeight:"300"}}> &nbsp;Us</span></span>
        </div>
        <div className="contactus_form col-sm-12 col-lg-4" style={{color:"#fff"}}>
            <input className="forminput names col-sm-12 col-lg-4"
            placeholder="Full Name *" style={{color:"#fff"}}/>
            <input  className="forminput phone col-sm-12 col-lg-4"
            placeholder="Phone Number"/>
            <input  className="forminput email col-sm-12 col-lg-4"
            placeholder="Email Address"/>
            <input  className="forminput dropdown col-lg-4"/>
            <input  className="forminput message"
            placeholder="Your Message"/>
            <div className="button_div">
            <button className="submit_button btn mx-auto col-lg-4" ><span >Get a quote</span></button>
            </div>
        </div>
      </div>

    )
}
export default Contactus;