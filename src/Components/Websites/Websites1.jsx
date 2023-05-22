import React from "react";
import './website.css';
import image1 from '../../assets/img/ecommerse icons/000.png';
import image2 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x.png';
import image3 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x445.png';
import image4 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x55.png';
import image5 from '../../assets/img/ecommerse icons/ab8b5ea6637ebd8e5755c838d952b8c1@3x.png';
import image6 from '../../assets/img/ecommerse icons/magento-logo-7F3911AE9E-seeklogo.com@3x.png';
import image7 from '../../assets/img/websites_page_images/3I6A8846@3x.png'

const ImageRow = ({ images }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ margin: '10px', maxWidth: '138px', maxHeight: '138px' }}
        />
      ))}
    </div>
  );
};

const Websites = () => {
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
  ];

  return (
    <>
      <div className="container">
        <div className="websites_bo">
          <div className="web_design_development">
            <span className="web_Design_title"><span className="web_design_title_span">Web</span>&nbsp; Design <span className="web_design_title_span">&&nbsp;</span> Development</span>
            <div className="developing_platforms">
              <ImageRow images={images} />
            </div>
            <p className="website_content_paragraph ">
            A website is the center of your digital ecosystem. The user experience matters once a customer enters it, similar to real-life first impressions. 
            HashGate’s diversified portfolio on website development is a testament to the capabilities of the team in giving you the website of your dreams.
            </p>
            <div className="website_lists">
                <ol className="website_list_unordered">
                    <li>E-commerce website</li>
                    <li>Portfolio Website</li>
                    <li>Co-corporate Website</li>
                    <li>Landing page</li>
                </ol>
            </div>
            <div className="websites_button">
                <button><a>Get a quote</a></button>
            </div>
          </div>
          <center>
          <div className="websites_border ">
             <div className="line1"></div>
             <div className="or">or</div>
             <div className="line2"></div>
          </div>
          </center>
          <div className="explore_our_work">
            <span className="explore_our_work_title">Explore our <span className="explore_our_work_work">&nbsp;work</span> </span>
          </div>
          <div className="explore_our_work_image">
          <img src={image7} alt="Image description"  className="explore_our_work_image00"/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Websites;
