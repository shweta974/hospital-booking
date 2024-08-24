import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Testimonal from "./Pages/Testimonal";
import Doctor from "./Pages/Doctor";
import Sign from "./Pages/Sign";
import Login from "./Pages/Login";
import Treatment from './Pages/Treatment'
import EmailForm from "./Pages/EmailForm";

import Footer from "./Components/Footer";



const App=()=>{
  return (
    <Router>
      <div>
        <Navbar/>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
         <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/treatment" element={<Treatment/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/testimonal" element={<Testimonal/>}/>
       
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign" element={<Sign />}/>
          <Route path="/email" element={<EmailForm/>}/>




           
         
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }


export default App;