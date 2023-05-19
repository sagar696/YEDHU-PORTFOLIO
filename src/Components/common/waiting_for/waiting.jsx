import React from "react";
import './waiting.css';
import "@fontsource/poppins";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Waiting =()=>{
 return(
    <div className="imgbg">
   <div className="waiting_area col-sm-12 col-md-12 col-lg-12">
   <div className="container">
       <div className="contact_title">
        <span>Contact HashGate</span>
        </div>   
        <div className="What-are-you-waiting-for">What are you waiting for?</div>   
        <div className="waiting_para">
        <span class="Contact-us-para col-lg-12">
  Contact us today! Get in touch with our Creative and technical consultants by phone, email or social media channels.
Or fill up the form and we’ll call you for a quick chat over a cuppa. </span>
        </div>
       <div className="button_class">
        <button  className="button_waiting" style={{ opacity: '.5' }} ><span className="contact_comp_button_content"  style={{ color: '#fff',opacity: '1' }}>Contact us</span></button>
        </div>
    </div>
   </div>
   </div>
 )
}
export default Waiting;