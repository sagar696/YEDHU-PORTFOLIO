import React from "react";
import './ourwork.css';


const Ourwork = () =>{
    return(
        <div className="container" id="appdesign">
            <div className="ourwork_content">
             <span className="our">our<span className="work">&nbsp;Work</span></span>
             <p className="ourwork_paragraph">
             -	We understand the value of good client relations and cost-efficient business solutions in this highly competitive global market. Through our scalable and adaptive digital projects, we have delivered, and continuously develop quality outputs for our client’s needs. We boast a robust user-friendly and feature-rich portfolio that caters to each client’s specific needs.
             </p>
            </div>
            <div className="slide_header_ourwork">
               <ul className="slide_header_list">
                <li><a>All</a></li>
                <li><a>Websites</a></li>
                <li><a>Mobile Apps</a></li>
                <li><a>Digital Marketing</a></li>
                <li><a>Social Media Management</a></li>
                <li><a>Media Production</a></li>
                <li><a>Graphics Design</a></li>
               </ul>
            </div>
        </div>
    )
}
export default Ourwork;