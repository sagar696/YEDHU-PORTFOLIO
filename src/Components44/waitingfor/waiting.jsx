import React from "react";
import './waiting.css';


const Waiting =()=>{
 return(
    <div className="imgbg">
   <div className="waiting_area">
   <div className="container">
       <div className="contact_title">
        <span>Contact HashGate</span>
        </div>   
        <div className="What-are-you-waiting-for">What are you waiting for?</div>   
        <div className="waiting_para">
        <span class="Contact-us-para">
  Contact us today! Get in touch with our Creative and technical consultants by phone, email or social media channels. <br />
Or fill up the form and we’ll call you for a quick chat over a cuppa. </span>
        </div>
        <div className="contact_button">
       <button className="contact_comp_button">
         <span className="contact_comp_button_content">Contact us</span>
       </button>
       </div>
    </div>
   </div>
   </div>
 )
}
export default Waiting;