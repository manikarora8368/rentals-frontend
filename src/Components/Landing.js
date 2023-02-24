import React from "react";
import "./Landing.scss";
import story1 from "../assets/story-1.jpeg";
import story2 from "../assets/story-2.jpeg";
import { Link } from "react-router-dom";
// import Gallery from './gallery';
function Landing() {
  return (
    <>
      <div className="story">
        <div className="story__pictures">
          <img src={story1} alt="" className="story__img--1" />
          <img src={story2} alt="" className="story__img--2" />
        </div>
        <div className="story__content">
          <h3 className="heading-3 mb-sm">Happy customers</h3>
          <h2 className="heading-2 heading-2--dark mb-md">
            &ldquo;The best decision of our lives&rdquo;
          </h2>
          <p className="story__text">
            Looking for a place to call home? Let us help you find your perfect
            match! Our rental website offers a variety of options that fit your
            lifestyle and budget. From cozy studios to spacious family homes,
            we've got you covered. Start your search today and discover your
            happily-ever-after rental
          </p>
          <Link to="/home">
            <button className="btn">Find your own home</button>
          </Link>
        </div>
      </div>
      {/* <Gallery/> */}
    </>
  );
}
export default Landing;
