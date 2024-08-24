import React from "react";
import aboutImage from '../about-img.jpg'

const About=()=>{
    return(
        <div>
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
        </div>
    )
}

export default About