import React from "react";
import Logo from '../logo.png'
import Post1 from '../post1.jpg'
import Post2 from '../post2.jpg'
import Post3 from '../post3.jpg'
import Post4 from '../post4.png'

const Footer=()=>{
    return(
        <div className="footer">
        <div className="container-fluid bg-dark ">
            <div className="logo d-flex  g-5" style={{marginLeft:"15%",}}><img src={Logo} className="bg-light" /> 
            <p className="par text-decoration-underline text-white  w-50 p-4 m-3 ">Your email_____________________________________________________subscribe</p>
             
            </div>
            <div className="row text-white m-0 p-4 bg-dark">
                <div className="col-md-3 ml-10">
                    <h3 className="list-style-square">Address</h3>
                    <ul className="list-unstyled m-3 p-2">

                    <p> <i className="fa-regular fa-location-dot "></i>123 Street,New York,USA </p>
                     <p><i className="fa-regular fa-phone "></i>Phone: +123 456 7890</p>
                     <p><i className="fa-regular fa-envelope "></i>Email: info@yourdomain.com</p>
                     <ul className="links d-flex text-white " >
                           <li className="icons text-white"> <i class="fa-brands fa-square-x-twitter"></i></li>
                           <li className="icons text-white"> <i class="fa-brands fa-instagram"></i></li>
                           <li className="icons text-white">  <i class="fa-brands fa-whatsapp"></i></li>
                          <li className="icons text-white"> <i class="fa-brands fa-facebook"></i></li>
                           
                        </ul>
                       
                    </ul>
                </div>
                <div className="col bg-dark">
                    <h3>Useful Links</h3>
                    <ul className="list-unstyled">
                    <li ><a >Home</a></li>
                        <li><a >Contact Us</a></li>
                        <li><a >About us</a></li>
                        <li><a >our services</a></li>
                        <li><a>Latest Blog</a></li>
                       
                       

                    </ul>
                </div>
                <div className="col-md-3 gap-1">
                    <h3>Latest Posts</h3>
                    <ul className="list-unstyled">
                       <li> <img src={Post1}/> Normal distribution</li>
                       <br/>
                       <li> <img src={Post2}/> Normal distribution</li>
                    </ul>
                
                    
                </div>
                <div className="col-md-3 ">
                    <h3>News</h3>
                    <ul className=" list-unstyled">
                    <li> <img src={Post3} /> Normal distribution</li>
                    <br/>
                    <li> <img src={Post4}/> Normal distribution</li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
    )
}

    

export default Footer;