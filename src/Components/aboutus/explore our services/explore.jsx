import React from "react";
import './explore.css';

const Aboutus_service = () =>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => {
          if (prevIndex === images.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      };
    return(
          <div className="service_bf" style={{background:"#1f1f1f",minHeight:"428px"}}>
          <div className="container">
            <center>
            <span style={{fontWeight:"300" }} className="sub_title service_title" >Explore our <span style={{fontWeight:"800"}}>Services</span></span>
            </center>
          </div>
           

          <div className="image-slider">
      <button className="slider-button prev-button" onClick={handlePrevImage}>
        Prev
      </button>
      <img src={images[currentImageIndex]} alt="Slider" className="slider-image" />
      <button className="slider-button next-button" onClick={handleNextImage}>
        Next
      </button>
    </div>

             
           

          </div>
    )
}
export default Aboutus_service;