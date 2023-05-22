import React, { useState, useEffect } from "react";
import './team.css';
import img01 from '../../../assets/img/aboutus/team/ancil.png';
import img02 from '../../../assets/img/aboutus/team/sundas.png';
import img03 from '../../../assets/img/aboutus/team/borna.png';
import img04 from '../../../assets/img/aboutus/team/neethu.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Team = () => {
  const [isSlider, setIsSlider] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 9999) {
        setIsSlider(true);
      } else {
        setIsSlider(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the function once on initial load

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 0,
    slidesToShow: isSlider ? 4 : Infinity,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
         
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      {isSlider ? (
        <Slider {...settings}>
          <div className="img000">
            <img src={img01} alt="Image 1" />
          </div>
          <div className="img000">
            <img src={img02} alt="Image 2" />
          </div>
          <div className="img000">
            <img src={img03} alt="Image 3" />
          </div>
          <div className="img000">
            <img src={img04} alt="Image 4" />
          </div>
          <div className="img000">
            <img src={img04} alt="Image 5" />
          </div>

          
        </Slider>
      ) : (
        <div className="team-grid">
          <img src={img01} alt="Image 1"/>
          <img src={img02} alt="Image 2" />
          <img src={img03} alt="Image 3" />
          <img src={img04} alt="Image 4" />
          <img src={img01} alt="Image 1" />
          <img src={img02} alt="Image 2" />
          <img src={img03} alt="Image 3" />
          <img src={img04} alt="Image 4" />
          
        </div>
      )}
    </>
  );
};

export default Team;
