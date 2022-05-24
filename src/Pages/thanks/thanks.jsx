import React from "react";
import "./Thanks.css";
import thanks from '../../images/illustration-thank-you.svg';


export const Thanks = () => {
  return (
    <div className="main-container">
      <div className="thanks-container">
        <div className="top-thanks-container">
          <img
            src={thanks}
            className="thanks-image"
            alt="Thank you"
          />
          <div className="message-container">
            <span>You selected 4 out of 5</span>
          </div>
        </div>
        <div className="bottom-thanks-container">
          <h1> Thank you!</h1>
          <p>
             We appreciate you taking the time to give a rating. 
             <br/>If you ever need more support, dont hesitate to 
             <br/>get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};
