import React from "react";
import './App_design.css';


const AppDesign = () =>{
    return(
        <>
        <div className="container">
            <div className="ourwork_texts">
                <span style={{
                    fontWeight:"300",
                    justifyContent:"center",
                    display:"flex",
                    fontSize:"62px"}}>Our <span style={{fontWeight:"800"}}> &nbsp;Work</span></span>
            <p className="ourwork_paragraph" style={{display:"flex",justifyContent:"center",fontSize:"20px",lineHeight:"40px",fontWeight:"normal",fontStretch:"normal",fontStyle:"normal"}}>
             -	We understand the value of good client relations and cost-efficient business solutions in this highly competitive global market. Through our scalable and adaptive digital projects, we have delivered, and continuously develop quality outputs for our client’s needs. We boast a robust user-friendly and feature-rich portfolio that caters to each client’s specific needs.
             </p>
            </div>
            <div className="slide_header_ourwork">
               <ul className="slide_header_list" style={{textDecoration:"none", listStyle:"none",display:"flex",justifyContent:"center"}}>
                <li><a>All</a></li>
                <li><a>Websites</a></li>
                <li><a>Mobile Apps</a></li>
                <li><a>Digital Marketing</a></li>
                <li><a>Social Media Management</a></li>
                <li><a>Media Production</a></li>
                <li><a>Graphics Design</a></li>
               </ul>
            </div>
            
            <div className="slider_progress">
                
            </div>
        </div>
        
        </>
    )
}
export default AppDesign;