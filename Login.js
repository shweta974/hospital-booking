

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {    

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/login", { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate("/home")
            }else{
                navigate("/register")
                alert("You are successfully register ")

            }
       
        })
        .catch(err => console.log(err))
    }

    function handleInput(){

        if(email.trim()==" "|| password.trim()==""){
            alert("Please enter your email and password")
        }
        else{
           alert('successfully login')
        }

       
    }


  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2><center>Login</center></h2>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text" 
                    placeholder='Enter Email' 
                    autoComplete='off' 
                    name='email' 
                    className='form-control rounded-0' 
                    onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password" 
                    placeholder='Enter Password' 
                    name='password' 
                    className='form-control rounded-0' 
                    onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <button type="submit" className="btn btn-success w-100 rounded-0" onClick={handleInput}>
                    Login
                </button>
                </form>
                <p>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Sign Up
                </Link>
            
        </div>
    </div>
  );
}

export default Login;






// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function Signup() {

//   const [name, setName] = useState()
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post("http://localhost:6000/register", { name, email, password })
//       .then(result => {
//         console.log(result)
//         navigate("/login")
//       })
//       .catch(err => console.log(err))
//   }


//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2><center>Sign Up</center></h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Name</strong>
//             </label>
//             <input type="text"
//               placeholder='Enter Name'
//               autoComplete='off'
//               name='email'
//               className='form-control rounded-0'
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input type="text"
//               placeholder='Enter Email'
//               autoComplete='off'
//               name='email'
//               className='form-control rounded-0'
//               onChange={(e) => setEmail(e.target.value)}

//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input type="password"
//               placeholder='Enter Password'
//               name='password'
//               className='form-control rounded-0'
//               onChange={(e) => setPassword(e.target.value)}

//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Sign Up
//           </button>
//         </form>
//         <p>Already have an account?</p>
//         <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//           Login
//         </Link>

//       </div>
//     </div>
//   );
// }

// export default Signup;