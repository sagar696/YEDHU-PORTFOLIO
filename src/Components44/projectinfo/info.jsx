import React from "react";
import './info.css';

const Projectinfo = () =>{
    return(

        <div className="container">
              <div className="project_info_DT">
              <span class="Project-Info">Project Info</span>
              </div>
              <ul className="project_head_li">
                <li><span class="Date-07212022"><span class="text-style-1">Date:</span>07.21.2022</span></li>
                <li><span class="Category-Web-Development">  <span class="text-style-1">Category:</span>Web Development</span></li>
                <li><span class="Client-Copodeals"><span class="text-style-1">Client:</span>  Copodeals</span></li>
              </ul>
        </div>
    )
}
export default Projectinfo;