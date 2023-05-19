import React from "react";
import "@fontsource/karla"
import './footer.css';
import img06 from "../../assets/img/footer/hashgate@3x.png";
import "@fontsource/poppins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import image001 from '../../assets/img/footer/facebook.svg';
import image002 from '../../assets/img/footer/you_tube.svg';
import image003 from '../../assets/img/footer/instagram_icon.svg';
import image004 from '../../assets/img/footer/Icon metro-linkedin.svg';



const Footer =()=> {
    return(
      <div className="Footer_body">
<div className="footer-bg"></div>

   <div className="footer-area">
    <div className="">
        <div  className="footerlogo">
            <a href="#" ><img src={img06}  className="footlogo" /></a>
        </div>
        <div className="footer2 col-lg-8">
          <div className="footer_list_title col-md-3">About us</div>
          <div className="footer_list_title col-md-3">Our Services</div>
          <div className="footer_list_title col-md-3">Our Work</div>
          <div className="footer_list_title col-md-3">Contact Us</div>
        </div>
        <div className="footer3">
          {/*<ul className="footer_icons_list">
           {/*} <li><a><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a> <FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a> <FontAwesomeIcon icon={faYoutube} /></a></li>
          
          </ul>*/}
          <div className="social_icons" >
            <img src={image001}/>
          </div >
          <div className="social_icons">
          <img src={image004}/>
          </div>
          <div className="social_icons">
          <img src={image003}/>
          </div>
          <div className="social_icons">
          <img src={image002}/>
          </div>
        </div >
        <div className="HashGate-All-Rights-Reserved ">
        <a href="#"><span class="HashGate-All-Rights-Reserved_a">©HashGate | All Rights Reserved</span></a> 
        </div>
    </div>
   </div>
 </div>
 
    )
}
 export default Footer;