import React from "react";
import './get.css';
import img01 from '../../assets/img/ecommerse icons/000.png'
import img02 from '../../assets/img/ecommerse icons/magento-logo-7F3911AE9E-seeklogo.com@3x.png'
import img03 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x445.png'
import img04 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x55.png'
import img05 from '../../assets/img/ecommerse icons/ab8b5ea6637ebd8e5755c838d952b8c1@3x.png'
import img06 from '../../assets/img/ecommerse icons/WooCommerce_logo.svg@3x.png'

const Get = () =>{
    const Get =[
        { src: img01, title: "" ,href:"" }, 
        { src: img02, title: "" ,href:"" },
        { src: img03, title: "" ,href:"" },
        { src: img04, title: "" ,href:"" },
        { src: img05, title: "" ,href:""}, 
        { src: img06, title: "" ,href:"" },
    ]
    return(
     <div className="get">
        <div className="container">
            <div className="container-flui">
                <div className="title-m-get">
                        <span className="gettitle1">Web</span> <span className="gettitle2">Design</span> <span className="gettitle1">&</span><span className="gettitle2"> Development</span>
               </div> 
           </div>
          <div className="get_para2 col-lg-8">
                  <img className="platform" src={img01}/>
                  <img className="platform" src={img02}/>
                  <img className="platform" src={img03}/>
                  <img className="platform" src={img04}/>
                  <img className="platform" src={img05}/>
                  <img className="platform" src={img06}/>
          </div>
        </div>
     </div>
    )
}
export default Get;