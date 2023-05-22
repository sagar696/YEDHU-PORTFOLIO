import React, { useState } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './digital_marketing.css';
import image1 from '../../assets/img/digital_marketing/drive.png';
import image2 from '../../assets/img/digital_marketing/youtube.png';
import image3 from '../../assets/img/digital_marketing/mail.png';
import image4 from '../../assets/img/digital_marketing/message.png';
import image5 from '../../assets/img/digital_marketing/seo.png';
import image7 from '../../assets/img//digital_marketing/digital_marketing_bg.png';
import divider from '../../assets/img/common/Group 1277@3x.png'

const DigitalMarketing = () =>{
    
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 150,

      });
    return(
        <>
        <div className="container-fluid">
        <center>
           <div className="website_title sub_titile">
           <span className="web_Design_title" style={{fontWeight:"800"}}><span className="web_design_title_span"style={{fontWeight:"300"}}>Digital</span> Marketing</span>
           </div>

           <div className="website_platform_images">
            <img src={image1} alt="magento"/>
            <img src={image2} alt="woocommerce"/>
            <img src={image3} alt="ab8b5ea6637ebd8e5755c838"/>
            <img src={image4} alt="wordpress"/>
            <img src={image5} alt="php"/>
           </div>
           <p className=" container website_content_paragraph ">
           A strong digital presence shortens the client’s journey to the right offers, in the right platform, at the right time, and to the right audience. Marketing is no longer about the content that you show, but it’s about the story you tell. Attract prospective customers, and build your community through the right promotions, digital engagements,
            and drive traffic to your website and social media with the power of good marketing.
            </p>
         
           <div className="swiper-container" style={{ overflowY: 'none' }}>
  <div className="swiper-wrapper">
    <div className="swiper-slide">
        <ul style={{listStyle:"none"}} >
            <li>Google Ads</li>
            <li>Email Marketing</li>
            <li>Pay Per Click</li>
        </ul>
 
    </div>
    <div className="swiper-slide">        
    <ul style={{listStyle:"none"}} >
            <li>SEO</li>
            <li>Search Engine Marketing</li>
            <li>Influencer Marketing</li>
        </ul></div>
    <div className="swiper-slide">
    <ul style={{listStyle:"none"}} >
            <li>Youtube Ads</li>
            <li>SMS Marketing</li>
            <li>Social Media Marketing</li>
        </ul>
    </div>

  </div>
</div>

            <div>
                <button className="websites_button" alt="Get a Quotes"><span style={{color:"#fff"}}>Get a quote</span></button>
            </div>
            <div className="container col-sm-12 col-md-12 col-lg-12">
                <img src={divider} className="col-12 col-md-12 col-lg-12"/>
            </div>
            <div className="explore_our_work">
            <span className="explore_our_work_title" style={{fontWeight:'300'}}>Explore our <span className="explore_our_work_work" style={{fontWeight:'800'}}>work</span> </span>
          </div>
           </center>
     </div>
     <center>
     <div className="explore_image_ourwork">
            <img src={image7} className="col-lg-10"/>
          </div>
          </center>


        </>
    )
}
export default DigitalMarketing ;