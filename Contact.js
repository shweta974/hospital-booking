import React, { useState } from "react";

import axios from 'axios';
// import Image from '../slider-img.jpg'
// import aboutImage from '../about-img.jpg'
// import hospitalImage from '../t1.png'
// import hospitalImage2 from '../t2.png'
// import hospitalImage3 from '../t3.png'
// import hospitalImage4 from '../t4.png'
// import hospitalImage5 from '../treatment-side-img.jpg';
// import doctorImage from '../team2.jpg';
// import doctorImage2 from '../team3.jpg';
// import doctorImage3 from '../team1.jpg';
// import contactImage from '../contact-img.jpg'
 const Contact = () => {   
  
  

 const[patientName,setPatientName]=useState();
 const[doctorName,setDoctorName]=useState();
 const[departmentName,setDepartmentName]=useState();
 const[phone,setPhone]=useState();
 const [symptoms,setSymptoms]=useState()
 const [date,setDate]=useState()


  const [response,setResponse]=useState(null)


  // const handleChange=(e)=>{
  //   const {name,value}=e.target;
  //   setFormData({
  //     ...formData,[name]:value
  //   });
  // }


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:6000/contact', { patientName, doctorName,departmentName, phone,symptoms,date });
      alert(res.data.message);
    } catch (err) {
      alert('Error registering user');
    }
  };



  // const handleSubmit=async(e)=>{
  //   e.preventDefault()
  //   try{
  //     const res=await axios.post(`http://localhost:6000/contact`,{patientName,doctorName,departmentName,phone,symptoms,date});
  //   .then(res=>console.log(res));
  //   . catch(err=>console.log(err))
     

    
  // }




    return (
        <div>
                  <div className="container-form mt-3 " style={{margin:"10% 5% 5% 10%"}}>
  <h2 className="heading text-style-underline">Make</h2> 
  <h2 className="heading text-success"> Appointment</h2>
 
  <form onSubmit={handleSubmit}>
    <div className="row"  style={{padding:"3px"}}>
      <div className="col">
        Patients Name:
        <input type="text" className="form-control" placeholder="Enter email" value={patientName} onChange={(e)=>setPatientName(e.target.value)}/>
      </div>
      <div className="col">
        Doctor Name:
        <input type="password" className="form-control" placeholder="Enter password" name="doctor" value={doctorName} onChange={(e)=>setDoctorName(e.target.value)} />

      </div>

      <div className="col">
        Department's Name:
        <input type="text" className="form-control" placeholder="Enter name" name="depart"  value={departmentName}  onChange={(e)=>setDepartmentName(e.target.value)} />

      </div>
      <br/>
      <br/>
      <div className="row"  >
      <div className="col" style={{marginLeft:"2px"}}>
        Phone number:
        <input type="number" className="form-control" placeholder="number" 
        name="number" 
        value={phone} 
        onChange={(e)=>setPhone(e.target.value)}/>

      </div>
      <div className="col">
        Symptoms:
        <input type="text" 
        className="form-control"
         placeholder="symptoms" 
         name="pwd" 
          value={symptoms}
           onChange={(e)=>setSymptoms(e.target.value)}/>

      </div>
      <div className="col">
      Choose Date:
        <input type="date" className="form-control" placeholder="choose date" name="date" value={date} onChange={(e)=>setDate(e.target.value)}/>

      </div>
      <br/>
   
      </div>

      
    </div>
    <button className="btn" type="submit">Submit now</button>
  </form>
  {response && <div>{response.message}</div>}
 
</div>
      

            
            {/* form */}
           

            {/* about */}
            

            {/* hospital Treatment */}

           


            {/* our doctors */}

          


            {/* testimonial */}

            
        </div>
    )
}

export default Contact