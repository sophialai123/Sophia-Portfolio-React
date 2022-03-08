import React from 'react';
import "./About.css"


function About() {
  return (
    <div className='about' id='About'>



      <div className='aboutMe'>
        <h3>About Me</h3>
        <p>
          Hello! My name is Sophia, a self-taught web developer. My interest in web development started back in 2021 during the Covid-19 lockdown.</p>
        <p>I started learning Python language at the beginning. The more I code, the more I enjoy doing it. I am particularly interested in front-end development. I have a good knowledge of CSS, HTML, JavaScript, React, Bootstrap, jQuery, Python, Git and Github. </p>

        <p>
          I am currently undertaking an internship for a start-up company that is creating a comic series.
          At first we developed the webpages using HTML, CSS and JavaScript. We later converted the entire project to use React.
        </p>

        <p>I am a fast learner, a team player and hard worker. I enjoy identifying and solving problems and developing solutions. I am willing to learn new skills and to take on new challenges.</p>

      </div>


      <div className='aboutImg'>
        <img className="img" src={require("../Images/SophiaLai.jpeg")} />
      </div>






    </div>
  );
}

export default About;

