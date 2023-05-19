import React from "react";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/project/projects_common_style.css';


const Project = () =>{
    return(
        <div className="container">
        <div className="box_body" style={{color:"#fff"}}>
        <div className="project_head">
        <div className="project_inline">
            <div className="project_info">
             <span style={{fontWeight:"600"}} >Project Info</span>
            </div>
            <div className="project_more_info col-lg-12 col-md-12 col-sm-a2">
                <span className="date col-sm-12 col-md-4 col-lg-4"><b>Date:</b>&nbsp; 07.21.2021</span>
                <span className="category  col-sm-12 col-md-5 col-lg-5 "><b>Category:</b>&nbsp; Web Development</span>
                <span className="client col-sm-12 col-md-3 col-lg-3 "><b>Client:</b>&nbsp; Biba Trading</span>
            </div>
        </div>
        </div>
        <div className="projects_information" style={{fontSize:"20px"}}> 
        <p>These usually are sophisticated analytical tools that allow you to dissect your portfolio and gain a clear view of your holdings. You can evaluate your overall asset allocation and sector weightings as well as uncover concentrated positions, view the stock holdings behind your mutual funds,
             measure performance against benchmarks and industry indexes, and stay up-to-date on the latest news and corporate actions relating to your holdings.</p>
             <p className="info_para" ><span style={{fontWeight:"bold"}}>Solutions</span><br/>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.<br/>Brand Identity <br/>Web Design &amp; UI<br/>Development &amp; CMS<br/>
             Photography </p>
             <p className="info_para" ><span style={{fontWeight:"bold"}}>Tools</span><br/>Please feel free to explore any of the portfolio tools Morningstar offers:<br/>Portfolio X-Ray<br/>ETF Screener<br/>
             Investment Radar<br/>Mutual Fund Screener<br/>Trade Analyzer

             </p>
        </div>

    
        </div>
        </div>
    )
}
export default Project;