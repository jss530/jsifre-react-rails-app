import React from 'react';
import './Buyers.css';

const Buyers = () => {
  return (
      <div className="buyers-page">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Buyers Page</h1>
          </div>
        </div>

        <div className="buyers-intro">
          <p id="opening-statement">Are you an individual or business looking to buy imperfect produce?</p>
          <p id="opening-statement">Welcome!</p>
          <p className="instructions"><span className="how-to"><strong>How it works:</strong></span><br/>
          <br/>
          First, create an account if you haven't done so already.
          Then, go to the Suppliers page and check out what's available.
          Each item is priced by the pound. Add as much as you like to your cart.
          After you check out, choose your delivery date and time. Then, all you have to do is wait
          for your delicious produce to arrive at your door!</p>
        </div>
      </div>
    )
  }

export default Buyers;
