import React, { useState, useEffect } from 'react';
import './contactus.css';
import 'react-phone-number-input/style.css'
import Contactus_footer from './contactus_footer/contactus_footer';



const Contactus = () => {
  const [value, setValue] = useState()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const [message, setMessage] = useState('');
   
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 576; // Adjust the breakpoint for mobile devices
  const isTablet = windowWidth > 576 && windowWidth <= 992; // Adjust the breakpoints for tablets
  const isDesktop = windowWidth > 992; // Adjust the breakpoint for desktops

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const form = {
    color: '#fff',
    // Common styles for all devices
    padding: '20px',
  };

  // Styles for mobile devices
  if (isMobile) {
    Object.assign(form, {
      backgroundColor: '',
      fontSize: '28px',
      paddingTop: '103px',
      // Add more mobile-specific styles as needed
    });
  }

  // Styles for tablet devices
  if (isTablet) {
    Object.assign(form, {
      backgroundColor: '',
      fontSize: '28px',
      // Add more tablet-specific styles as needed
    });
  }

  // Styles for desktop devices
  if (isDesktop) {
    Object.assign(form, {
      backgroundColor: '',
      fontSize: '28px',
      // Add more desktop-specific styles as needed
    });
  }

  return (
    <>
      <div className="container" >
        <form className="form" style={{ color: '#fff', padding: '8px' }}>
          <span className='contactus' style={{ fontWeight: "800", justifyContent:"center",display:"flex"}}>Contact <span style={{ fontWeight: "300" }}>&nbsp;Us</span></span>
          <div className="row">
          <div className={isMobile ? "col-12" : "col-md-6"}>

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
                  className='form_input form_input custom-dropdown'
                  id="dropdown"
                  value={dropdownValue}
                  onChange={(e) => setDropdownValue(e.target.value)}
                 
                >
                  <option value="" className='form_option_text'>Choose your Service</option>
                  <option value="option1" className='form_option_text'>Web Development</option>
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
        </form>
        <Contactus_footer/>
      </div>
    </>
  );
}

export default Contactus;
