import React from "react";
import './website.css'
import image1 from '../../assets/img/ecommerse icons/000.png';
import image2 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x.png';
import image3 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x445.png';
import image4 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x55.png';
import image5 from '../../assets/img/ecommerse icons/ab8b5ea6637ebd8e5755c838d952b8c1@3x.png';
import image6 from '../../assets/img/ecommerse icons/magento-logo-7F3911AE9E-seeklogo.com@3x.png';
import image7 from '../../assets/img/websites_page_images/3I6A8846@3x.png';
import divider from '../../assets/img/common/Group 1277@3x.png'

 


const Websites = () => {

    return(
        <>
     <div className="container-fluid">
        <center>
           <div className="website_title sub_titile">
           <span className="web_Design_title" style={{fontWeight:"800"}}><span className="web_design_title_span"style={{fontWeight:"300"}}>Web</span>&nbsp; Design <span className="web_design_title_span"style={{fontWeight:"300"}}>&&nbsp;</span> Development</span>
           </div>

           <div className="website_platform_images">
            <img src={image6} alt="magento"/>
            <img src={image4} alt="woocommerce"/>
            <img src={image5} alt="ab8b5ea6637ebd8e5755c838"/>
            <img src={image3} alt="wordpress"/>
            <img src={image1} alt="php"/>
            <img src={image2} alt="shopify"/>
           </div>
           <p className=" container website_content_paragraph ">
            A website is the center of your digital ecosystem. The user experience matters once a customer enters it, similar to real-life first impressions. 
            HashGate’s diversified portfolio on website development is a testament to the capabilities of the team in giving you the website of your dreams.
            </p>
            <div className="website_lists">
                <span>E-commerce website</span>
                <span>Portfolio Website</span>
                <span>Co-corporate Website</span>
                <span>Landing page</span>
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
export default Websites;
