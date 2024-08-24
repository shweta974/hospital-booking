import React  from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import LogoImg from '../logo.png';

const Navbar=()=>{
    return(
        <div>

     <nav className='navbar d-flex m-10 text-light list-unstyled'>
        <div className='logo'>
          <img src={LogoImg} style={{width:"70px", marginLeft:"50px",marginRight:"20px"}}/>
          </div>

          <ul className='navbar-list-sm d-flex p-20  text-light list-unstyled' >
            <li  className='links text-white'>
              <Link to="/"   className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/treatment">Treatment</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='links text-light'>
              <Link to="/doctor">Doctor</Link>
            </li>
            <li>
              <Link to="/testimonal">Testimonal</Link>
            </li>
           
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/sign">Sign In</Link>
            </li>

            <li>
              <Link to="/email">Email</Link>
            </li>


          </ul>
        </nav>
            
            {/* <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src={logoImage} style={myStyle}/>Dent Care </Link>
        
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/home" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/services" >Services</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
     
      </ul>
      <div className='btn' type="btn">Make appointment</div>
    </nav> */}

               
            
        </div>
    )
}

export default Navbar;