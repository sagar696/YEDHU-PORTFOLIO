import React, { useState, useEffect } from 'react';
import './contactus.css';
import 'react-phone-number-input/style.css'
import Contactus_footer from './contactus_footer/contactus_footer';
import Bg_image_foot from '../../assets/img/contactus/MOBILE.png'
import Line_or from '../../assets/img/contactus/Group 1277@3x.png'
import Image_mail from "../../assets/img/contactus/mail_FILL0_wght400_GRAD0_opsz48.svg";
import Image_location from "../../assets/img/contactus/location_on_FILL0_wght400_GRAD0_opsz48.svg";
import Image_call from "../../assets/img/contactus//call_FILL0_wght400_GRAD0_opsz48.svg";
import contact_us_logo from '../../assets/img/footer/hashgate@3x.png';
import Facebook from '../../assets/img/footer/facebook.svg';
import instagram from '../../assets/img/footer/instagram_icon.svg';
import linkedin from '../../assets/img/footer/Icon metro-linkedin.svg';
import youtube from '../../assets/img/footer/you_tube.svg';



const Contactus = () => {
  const [value, setValue] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for form submission status
   
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 576; // breakpoint for mobile devices
  const isTablet = windowWidth > 576 && windowWidth <= 992; //breakpoints for tablets
  const isDesktop = windowWidth > 992; //breakpoint for desktops


  const getDropdownSize = () => {
    if (dropdownValue === 'option1') {
      return 'small-dropdown';
    } else if (dropdownValue === 'option2') {
      return 'medium-dropdown';
    } else if (dropdownValue === 'option3') {
      return 'large-dropdown';
    }
    return '';
  };

  return (
      <>
      <div className='Image_contact_us' > 
      <div className="container">
        <center>
        <form className="form_contact" style={{ color: '#fff', padding: '8px',maxWidth:"992px", }}>
          <span className='contactus' style={{ fontWeight: "800", justifyContent:"center",display:"flex"}}>Contact <span style={{ fontWeight: "300" }}>&nbsp;Us</span></span>
          <div className="row">
          <div className={isMobile ? "col-12" : "col-md-6 col-lg-6" }>

              <div className="form-group">
                <input
                  className='form_input'
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder='Full Name'
                 
                />
              </div>
              <div className="form-group">
              <input
                stye={{color:"#fff"}}
                  className='form_input'
                  type="tel"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  placeholder='Phone Number'

                />
              </div>
            </div>
            <div className={isMobile ? "col-12" : "col-md-6"}>
              <div className="form-group ">
                <input
                  className='form_input'
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder='Email Address'
                />
              </div>
              <div className="form-group">
                <select
                  className='form_input form_input custom-dropdown custom-select'
                  id="dropdown"
                  style={{width:"100%"}}
                  value={dropdownValue}
                  onChange={(e) => setDropdownValue(e.target.value)}
                >
                 <option value="" className="form_option_text">Choose your Service</option>
                  <option value="option1" className='form_option_text' style={{ background: 'red' }}>Web Development</option>
                  <option value="option2"className='form_option_text'  >App Development</option>
                  <option value="option3"className='form_option_text'>Digital Marketing</option>
                  <option value="option1"className='form_option_text'>Social Media Management</option>
                  <option value="option2"className='form_option_text'>Media Production</option>
                  <option value="option3"className='form_option_text'>Graphic Design</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <textarea
              style={{color:"#fff",padding:"20px",fontSize:"12px"}}
              className='form_message'
                id="message"
                value={message}
                placeholder='Your Message'
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='submit_button'>
          <button className='form_submit' type="submit">Get a quote</button>
          </div>
          <div className="border_line">
             <img src={Line_or}/>
       </div>
       <div className="reach_us_at">
          <span style={{fontWeight:"800"}}>Reach <span style={{fontWeight:"300"}}>us at</span></span>
       </div>
        </form></center>
        <center>
        <div className="reach col-lg-12 col-md-12 col-sm-12">
          <div className="call col-4 col-md-4 col-lg-3">
              <center><img src={Image_call} className='reach_icons' /></center>
              <a href="+971 04 577 6252">+971 04 577 6252</a>
              <a href="+971 55 971 7192">+971 55 971 7192</a>
          </div>
          <div className="mail col-3.5s col-md-4 col-lg-5">
              <center> <img src={Image_mail} className='reach_icons'/></center>
               <a href="mailto: info@hashgate.ae">info@hashgate.ae</a>
               <a href="mailto: hashgate.ae@gmail.com">hashgate.ae@gmail.com</a>
          </div>
          <div className="location col-4 col-md-4 col-lg-3">
               <center><img src={Image_location} className='reach_icons ' id="location_img"/></center>
               <a>Office #2, Dilan Tower,<br/>Al Jaddaf ,Dubai, UAE</a>
          </div>
        </div>
        <div className="contact_us_logo">
            <img  src={contact_us_logo} className='contact_us_logo_footer'/>
        </div>
        <div className="footer_list_main col-12 col-md-12 col-lg-12">
          <div className="list1 lists col-2"><a href="" >About us</a></div>
          <div className="list2 lists col-2"><a href="">Our services</a></div>
          <div className="list3 lists col-2"><a href="">Our Work</a></div>
          <div className="list4 lists col-2"><a href="">Contact Us</a></div>
        </div>
        <div className='Social_media_icons_contact_us'>
             <img src={Facebook}/>
             <img src={linkedin}/>
             <img src={instagram}/>
             <img src={youtube}/>
        </div>
        <div className="reserved" stye={{maxWidth:"992px"}}>
          <span>©HashGate | All Rights Reserved</span>
        </div>
        </center>
        </div>
         </div>
         </>
    

  );
}

export default Contactus;
