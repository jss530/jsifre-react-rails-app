import React from 'react';

const Home = () => {
  
  return (
    <div className="App">
      <header className="App-header">
          <h1>UGLY DELICIOUS</h1>
          <p>Because ugly food needs love, too.</p>
      </header>

      <div className="container">
        <div className="App-intro">
           <div className="homepage-intro">
             <p>Welcome to Ugly Delicious. We connect grocery stores looking to sell imperfect produce with
             individuals and businesses looking to purchase them.</p>
             <br/>
             <button type="button" id="intro-button">Get started</button>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
