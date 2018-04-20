import React from 'react';
import './About.css';

const About = () => {
  return (

      <div className="about-us">
          <div className="hero-image">
            <div className="hero-text">
              <h1>About Us</h1>
            </div>
          </div>
          <div id="content">
            <div className="about-text">
              <p>We created Ugly Delicious because we are passionate about food - and we hate to see it go to waste.</p>
              <p><strong>FACT: Did you know half of all produce in the U.S. is thrown away because
              of imperfections?</strong></p>
              <p>The demand for &ldquo;perfect&ldquo; food is so great that perfectly good food
              is getting sent to the trash. Not only does this take a toll on the environment, but it has impacts on
              the rates of poverty and hunger as well. </p>

              <p className="mission-intro">Our mission is threefold:</p>

              <ol className="mission-statement">
                <li>Change people&lsquo;s perceptions of &ldquo;ugly&ldquo; food</li><br/>
                <li>Stop the waste before it occurs: connect grocery stores that would otherwise have to
                trash their produce with individuals and businesses that want to buy them.</li><br/>
                <li>As much as we can, help decrease the rate of hunger in our country.</li><br/>
              </ol>

            </div>
          </div>
      </div>
  );
};

export default About;
