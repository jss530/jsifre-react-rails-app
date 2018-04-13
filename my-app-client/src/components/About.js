import React from 'react';
import './About.css';
import eggplants from '../details/img/eggplant-med.jpg'

const About = () => {
  return (
    <div className="title">
      <h1>About Us</h1>
        <div id="content">
          <div class="col">
            <img src={eggplants} alt={"eggplants"}/>
          </div>
          <div class="col">
            <p>Example content</p>
          </div>
        </div>
    </div>
  );
};

export default About;
