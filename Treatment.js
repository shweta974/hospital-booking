import React from "react";
import hospitalImage from '../t1.png'
import hospitalImage2 from '../t2.png'
import hospitalImage3 from '../t3.png'
import hospitalImage4 from '../t4.png'
import hospitalImage5 from '../treatment-side-img.jpg';
const Treatment=()=>{
    return(
        <div>
             <div className="hospital-container ">
                <h2 className="heading text-dark text-center">Hospital <span className="heading text-success">Treatment</span></h2>
                <div className="hospital-content d-flex">

                <div className="left-content d-flex">
                    <div className="hospital-image">
                        
                        <img src={hospitalImage} />
                        <h4>Nephrologist Care</h4>
                        <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                        <button className="btn  text-decoration-none">READ MORE</button>
                    </div>

                    <div className="hospital-image">
                   
                        <img src={hospitalImage2} />
                        <h4>Eye Care</h4>
                        <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                        <button className="btn ">READ MORE</button>
                    </div>

                    <div className="hospital-image">
                        
                        <img src={hospitalImage3} />
                        <h4>Pediatrician Clinic</h4>
                        <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                        <button className="btn ">READ MORE</button>
                    </div>

                    <div className="hospital-image">
                       
                        <img src={hospitalImage4} />
                        <h4>Parental Care</h4>
                        <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
                        <button className="btn ">READ MORE</button>
                    </div>

                </div>
                <div className="right-content">
                    <div className="hospital-image">
                        <img src={hospitalImage5} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Treatment