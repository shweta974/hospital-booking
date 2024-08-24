import React from "react";
import doctorImage from '../team2.jpg';
import doctorImage2 from '../team3.jpg';
import doctorImage3 from '../team1.jpg';

const Doctor=()=>{
    return(
        <div>
             <div className="doctor-container ">
                <h2><b>Our <span className="heading text-white">Doctors</span></b></h2>
                <div className="doctor-content d-flex">
                    <div className="doctor-image">
                        <img src={doctorImage}  style={{marginTop:"-5%",marginLeft:"7%"}}/>
                        <h3>Dr. John Doe</h3>

                        <p>MBBS</p>
                       
                        <ul className="links d-flex bg-light ">
                           <li className="icons text-dark"> <i class="fa-brands fa-square-x-twitter"></i></li>
                           <li className="icons text-dark"> <i class="fa-brands fa-instagram"></i></li>
                           <li className="icons text-dark">  <i class="fa-brands fa-whatsapp"></i></li>
                          <li className="icons text-dark"> <i class="fa-brands fa-facebook"></i></li>
                           
                        </ul>
                    </div>
                    <div className="doctor-image">
                        <img src={doctorImage2}  style={{marginTop:"-5%",marginLeft:"7%"}} />
                        <h3>Dr. Jenni</h3>
                        <p>DNB</p>
                        <ul className="links d-flex bg-light ">
                           <li className="icons text-dark"> <i class="fa-brands fa-square-x-twitter"></i></li>
                           <li className="icons text-dark"> <i class="fa-brands fa-instagram"></i></li>
                           <li className="icons text-dark">  <i class="fa-brands fa-whatsapp"></i></li>
                          <li className="icons text-dark"> <i class="fa-brands fa-facebook"></i></li>
                           
                        </ul>
                    </div>
                    <div className="doctor-image">
                        <img src={doctorImage3}  style={{marginTop:"-5%",marginLeft:"7%"}} />
                        <h3>Dr. Joe Doe</h3>
                        <p>MBBS</p>
                        <ul className="links d-flex bg-light ">
                           <li className="icons text-dark"> <i class="fa-brands fa-square-x-twitter"></i></li>
                           <li className="icons text-dark"> <i class="fa-brands fa-instagram"></i></li>
                           <li className="icons text-dark">  <i class="fa-brands fa-whatsapp"></i></li>
                          <li className="icons text-dark"> <i class="fa-brands fa-facebook"></i></li>
                           
                        </ul>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Doctor