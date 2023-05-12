import React from "react";
import "@fontsource/karla"
import './footer.css';
import img06 from "../../assets/img/hashgate@3x.png";
import "@fontsource/poppins";


const Footer =()=> {
    return(

 <footer className="footer-bg">
   <div className="footer-area">
    <div className="container">
        <div  className="footerlogo">
            <a href="#" ><img src={img06}  className="footlogo" /></a>
        </div>
        <div className="footer2">
          <ul className="footer_list">
            <li><a>About us</a></li>
            <li><a>Our Services</a></li>
            <li><a>Our Work</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer3">
          <ul className="footer_icons_list">
            <li><a><i className="fab fa-instagram" ></i></a></li>
            <li><a></a></li>
            <li><a></a></li>
            <li><a></a></li>
          </ul>
        </div>
        <div className="HashGate-All-Rights-Reserved ">
        <a href="#"><span class="HashGate-All-Rights-Reserved">©HashGate | All Rights Reserved</span></a> 
        </div>
    </div>
   </div>
 </footer>
    )
}
 export default Footer;