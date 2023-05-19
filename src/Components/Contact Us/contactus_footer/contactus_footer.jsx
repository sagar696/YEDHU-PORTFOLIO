import React from "react";
import "./contact_footer.css";
import image_mail from "../../../assets/img/contactus/mail_FILL0_wght400_GRAD0_opsz48.svg";
import image_location from "../../../assets/img/contactus/location_on_FILL0_wght400_GRAD0_opsz48.svg";
import image_call from "../../../assets/img/contactus/call_FILL0_wght400_GRAD0_opsz48.svg";
import bg_image from '../../../assets/img/contactus/MOBILE.png';
import logo from '../../../assets/img/footer/hashgate@3x.png';

const Contactus_footer = () => {
    
  return (
     <div className="disabled-container">
     <div className="contact_us_footer">
     <div className="border_line">
        <div className="line01 col-sm-4"></div>
        <div className="line_or col-sm-2">or</div>
        <div className="line01 col-sm-4"></div>
      </div>
     
     <div className="contact-info">
      <div className="info-item">
        <img src={image_call}/>
      <a href="+971 04 577 6252">+971 04 577 6252</a>
            <a href="+971 55 971 7192">+971 55 971 7192</a>
      </div>
      <div className="info-item">
      <img src={image_mail}/>
      <a href="mailto: info@hashgate.ae">info@hashgate.ae</a>
            <a href="mailto: hashgate.ae@gmail.com">hashgate.ae@gmail.com</a>
      </div>
      <div className="info-item">
      <img src={image_location}/>
       <a>Office #2, Dilan Tower, <br/> Al Jaddaf ,Dubai, UAE</a>
      </div>
      </div>
    </div>
     </div>
  );
};

export default Contactus_footer;
