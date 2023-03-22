import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import '../css/navbar.css'
import logo from '../assets/images/nav-logo.png'
import { FaPhone, FaEnvelope } from 'react-icons/fa';
export default function Navigationbar() {
  return (
    <div class="wholenav">
      <div class="abovenav ">
        <div>

          <FaPhone></FaPhone>
          <text class="text" > 1234567890</text>
        </div>
        <div>

          <FaEnvelope></FaEnvelope>
          <text class="text"> gsrtraders@gmail.com</text>
        </div>



      </div>

      <div>


        <Navbar expand="lg">
          
            <Navbar.Brand href="#home">
              <img
                src={logo}
                // width="50"
                // height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            {/* <Navbar.Brand > <h3 style={{ color: "orange" }}>GS-TRADERS</h3> */}
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <nav class="stroke">
                <div >
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Downloads</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">Nice staff</a></li>
                  </ul>
                </div>
              </nav>
            </Navbar.Collapse>
          
        </Navbar>
      </div>
    </div>
  )
}

