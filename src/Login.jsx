import React from 'react'

const Login = () => {
  return (
    <div>
        <div style={{ display: "flex", height: "100vh" }}>
      
      <div className="sidebar">
      <h2><img src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png" alt="" height="50px" width="100px" /></h2>
        <ul>
          <li ><a href="/"><button>Home</button></a></li>
          <li><a href="/register"><button>Register</button></a></li>
          <li><a href="/Newmodels"><button>New Models</button></a></li>
          <li><a href="#"><button>City</button></a></li>
          <li><a href="/Bookservice"><button>Book Service</button></a></li>
        </ul>
      </div>

    
      <div className="main-content" >
        <form className="form-container">
          <h2 style={{color:"white"}}>Sign Up</h2>
          <label style={{color:"white" }}>Name</label>
          <input type="text" />
          <label style={{color:"white"}}>Email</label>
          <input type="email" />
          <label style={{color:"white"}}>Password</label>
          <input type="password" />
          
          
          <div className="reg">
            <label style={{color:"white"}}>Gender:</label>
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male" style={{color:"white"}}> Male</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female" style={{color:"white"}}> Female</label>
          </div>
        
          <div id="lan">
          <label style={{color:"white"}}>Languages:</label>
            <input type="checkbox" id="bengali" />
            <label htmlFor="bengali" style={{color:"white"}}> Kannada</label>
            <input type="checkbox" id="hindi" />
            <label htmlFor="hindi" style={{color:"white"}}> English</label>
            <input type="checkbox" id="english" />
            <label htmlFor="english" style={{color:"white"}}> Bahubali</label>
          </div>
         
          
          <button type="submit">Submit</button>
          <p>
            <a href="/Login">I already have an acount</a>
          </p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login