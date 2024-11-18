// import React from 'react'

// const Bookservice = () => {
//   return (
//     <div>
//       <form action="">
//       <label htmlFor="">Vehicle Number :</label>

//       <input type="text" />
//       <br /> <br />
//       <label htmlFor="">Select slot date :</label>
//       <input type="date" />
//       </form>
//     </div>
//   )
// }

// export default Bookservice


import React, { useState } from 'react';

const BookService = () => {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Vehicle Number:', vehicleNumber);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      <div className="sidebar">
      <h2><img src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png" alt="" height="50px" width="100px" /></h2>
        <ul>
          <li ><a href="/"><button>Home</button></a></li>
          <li><a href="/register"><button>Register</button></a></li>
          <li><a href="/Newmodels"><button>New Models</button></a></li>

          <li><a href="/Bookservice"><button>Book Service</button></a></li>
        </ul>
      </div>

    
      <div className="main-content" >
        <form className="form-containerr">
          <h2 style={{color:"white"}}>Book service Slot</h2>
          <label style={{color:"white" }}>Vehicle Number :</label>
          <input type="text" />
          <label style={{color:"white"}}>Select Date :</label>
          <input type="datetime-local" />

          <button type="submit">Submit</button>
          
        </form>
      </div>
    </div>
  );
};

export default BookService;