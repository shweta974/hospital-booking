import React from "react";
import contactImage from '../contact-img.jpg'


const Testimonal=()=>{
    return(
        <div>
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

export default Testimonal