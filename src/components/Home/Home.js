import React from 'react';
import "./Home.css"
import BackgroundImg from "../Images/background.png"

function Home() {
  return (
    //Set the image use backgroundIamge in the div
    <div className='home' id='Home' style={{ backgroundImage: `url(${BackgroundImg}) ` }}>

      <h1> I am Sophia Lai, a Web Developer!</h1>



    </div>
  );
}

export default Home;