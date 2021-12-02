
import React from "react";
import "./Project.css";
import Project1 from '../Img/project1.png'
import Project2 from '../Img/project2.png'
import Project4 from '../Img/project2.1.png'
import opt from '../Img/opt-page.png'

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading title">My Latest Project</h1>
        <p className="heading p__color">
        Work speaks louder than words.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">Capdas is our self designed and developed e-commerece website.</h4>
                     <a href="https://github.com/suvamAdhikary/Capdas-ECommerce" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">Clone of Premier League</h4>
                     <a href="https://github.com/Mangeshbk/Premier-League-clone" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={opt} alt="" className="project__img img__size" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h4 className="project__text">Clone of optimizely</h4>
                     <a href="https://github.com/vinayak-pk/Optimizely-clone" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;