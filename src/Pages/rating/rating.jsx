import React, {useState} from "react";
import "./Rating.css";
import { Link } from "react-router-dom";
import star from "../../images/icon-star.svg";
import Rate from "../../components/Rate"


export const Rating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="main-container">
      <div className="rating-container">
        <div className="top-rating-container">
          <img src={star} className="star-icon" alt="star" />
        </div>
        <div className="middle-rating-container">
          <h1> How did we do?</h1>
          <p>
            Please let us know how we did with your support
            <br />
            request. All feedback is appreciated to help us
            <br />
            improve our offering!
          </p>
        </div>
        <div className="bottom-rating-container">
          <Rate rating={rating} onRating={rate =>  setRating(rate)} />
          <p className="rating-p"> Rating - {rating} </p>
          <Link to="/Rating-App/Thanks" style={{ textDecortation: "none"}}>
            <button className="submit-button">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


