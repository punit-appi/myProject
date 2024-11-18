import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Carousel from "./Carousel";

function HomePage() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div className="sidebar">
        <h2><img src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png" alt="" height="50px" width="100px" /></h2>
        <ul>
          <li><Link to="/"><button>Home</button></Link></li>
          <li><Link to="/register"><button>Register</button></Link></li>
          <li><a href="/Newmodels"><button>New Models</button></a></li>

          <li><a href="/Bookservice"><button>Book Service</button></a></li>
        </ul>
      </div>

     
      <div className="main-content">
       <nav id="innav">
        <h1 style={{backgroundColor:"lightgoldenrodyellow"}}>Hello wekcome to K T M</h1>
        <Carousel></Carousel>
       </nav>
      </div>
    </div>
  );
}

export default HomePage;
