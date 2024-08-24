import React from "react";

import Image from '../slider-img.jpg'
import aboutImage from '../about-img.jpg'
import hospitalImage from '../t1.png'
import hospitalImage2 from '../t2.png'
import hospitalImage3 from '../t3.png'
import hospitalImage4 from '../t4.png'
import hospitalImage5 from '../treatment-side-img.jpg';
import doctorImage from '../team2.jpg';
import doctorImage2 from '../team3.jpg';
import doctorImage3 from '../team1.jpg';
import contactImage from '../contact-img.jpg'
import './Home.css';

const Home = () => {
    return (
        <div>
          

            <div>
               
                <div className="home-container d-flex">
                    <div className="home-content">
                        <h1 className="heading text-info ">MICO </h1>
                        <h1 className="heading text-success ">HOSPITAL </h1>
                      
                        <p> when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                        <button className="btn" >Contact us</button>
                    </div>
                    <div className="home-image">
                        <img src={Image} />

                    </div>

                </div>
            </div>

            {/* form */}
            
            <div class="container-form mt-3">
  <h2 className="heading text-style-underline">Make</h2> 
  <h2 className="heading text-success"> Appointment</h2>
 
  <form>
    <div class="row">
      <div class="col">
        Patients Name:
        <input type="text" class="form-control" placeholder="Enter email" name="name"/>
      </div>
      <div class="col">
        Doctor Name:
        <input type="password" class="form-control" placeholder="Enter password" name="doctor"/>

      </div>

      <div class="col">
        Department's Name:
        <input type="password" class="form-control" placeholder="Enter name" name="pswd"/>

      </div>
      <br/>
      <br/>
      <div className="row">
      <div class="col">
        Phone number:
        <input type="number" class="form-control" placeholder="" name="pswd"/>

      </div>
      <div class="col">
        Symptoms:
        <input type="text" class="form-control" placeholder="" name="pswd"/>

      </div>
      <div class="col">
      Choose Date:
        <input type="date" class="form-control" placeholder="" name="pswd"/>

      </div>
      <br/>
   
      </div>

      
    </div>
  </form>
  <button className="btn" type="button">Submit now</button>
</div>
            
            
            

            {/* about */}
            <div className="about-container d-flex m-5">
                <div className="about-image">
                    <img src={aboutImage} />
                </div>
                <div className="about-content">
                    <h2 className="heading text-success"><b>About Hospital</b></h2>
                    <p>when looking at its layout. The point of using Lorem Ipsum is that it has has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors,</p>

                    <button className="btn">Read More</button>
                </div>

            </div>

            {/* hospital Treatment */}

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


            {/* our doctors */}

            <div className="doctor-container ">
                <h2><b>Our <span className="heading text-white">Doctors</span></b></h2>
                <div className="doctor-content d-flex">
                    <div className="doctor-image">
                        <img src={doctorImage}  style={{marginTop:"-5%",marginLeft:"7%"}}/>
                        <h3>Dr. John Doe</h3>

                        <p>MBBS</p>
                       
                        <ul className="links d-flex bg-light gap-4 m-3 " style={{marginLeft:"3%"}}>
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
                        <ul className="links d-flex bg-light gap-4 m-3 " style={{marginLeft:"3%"}} >
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
                        <ul className="links d-flex bg-light gap-4 m-3 " style={{marginLeft:"3%"}} >
                           <li className="icons text-dark"> <i class="fa-brands fa-square-x-twitter"></i></li>
                           <li className="icons text-dark"> <i class="fa-brands fa-instagram"></i></li>
                           <li className="icons text-dark">  <i class="fa-brands fa-whatsapp"></i></li>
                          <li className="icons text-dark"> <i class="fa-brands fa-facebook"></i></li>
                           
                        </ul>

                    </div>

                </div>

            </div>


            {/* testimonial */}

            <div className="testimonial-container">
                <h2 className="heading text-center text-uppercase" ><b>Testimonial</b></h2>
                <h3 className="head ">.</h3>
                <p className="para" style={{marginTop:"-15%"}}>editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Variouseditors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
            
             <div className="testimonial-content d-flex">
                <div className="testimonial-form">
                    <h2 className="head text-dark">GET IN TOUCH</h2>
                    <form className="form-input m-lg-1  text-info" style={{width:"500px" ,color:"green"}}>
    {/* <div class="row"> */}
      <div class="col">
        
        <input type="text" className="form-control mt-5 p-3 " placeholder="Full name" name="name" />
      </div>
      <br/>
      <div class="col">
       
        <input type="email" class="form-control" placeholder="Enter email" name="doctor"/>

      </div>
      <br/>
     

      <div class="col">
     
        <input type="number" class="form-control" placeholder="Phone number" name="pswd"/>

      </div>
      <br/>

      <div class="col">
     
        <input type="text" class="form-control" placeholder="message" name="pswd"/>
   
<br/>
        <button className="btn w-25">Send</button>
      </div>
      <br/>
     
      
      

      

      <br/>
   
    

      
    {/* </div> */}
  </form>
                    {/* <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Phone" />
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </form> */}
                </div>
                <div className="testimonial-image">
                    <img src={contactImage} />
                </div>

             </div>
            </div>
        </div>
    )
}


export default Home;