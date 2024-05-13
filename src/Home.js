import React, { useState } from 'react';
import axios from 'axios';
import  "./Home.css"

function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [Data, setData] = useState(null);
  const [POP, setPOP] = useState(true);
  const apiUrl = 'https://chimpu.xyz/api/post.php';

  const handlePostData = async () => {
    setPOP(true)
    try {
      const response = await axios.post(apiUrl, { phonenumber: phoneNumber });
      setData(response.data);
      console.log(response.data)
      
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="Home">
      <h1>API Post Task</h1>
      <div className='form'>
        <label htmlFor="phoneNumberInput">Enter Phone Number:</label>
        <input
          placeholder='+91'
          type="text"
          id="phoneNumberInput"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <button className='btn' onClick={handlePostData}>Get Start</button>
        
      </div>
      {Data&& Data.msg && POP && (
        <div className='pop'>
            <h2>{Data.msg}</h2>
            <button className='okbtn' onClick={()=>{setPOP(false) ;setData("")}}>OK</button>
        </div>
      )}
    </div>
  );
}

export default Home;
