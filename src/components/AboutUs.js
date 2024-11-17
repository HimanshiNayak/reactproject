import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="circle floating-circle">
        <h2>Welcome to Bahar</h2>
        <p>Where Flavors Meet Tradition!</p>
      </div>

      <div className="circle floating-circle">
        <h2>Our Story</h2>
        <p>
          Nestled in the heart of Renukoot, Sonebhadra, Bahar has been your go-to destination for authentic Indian cuisine since we first opened our doors.
        </p>
      </div>

      <div className="circle floating-circle">
        <h2>Expanding Our Horizons</h2>
        <p>
          We’ve recently expanded our menu to serve a variety of other cuisines. Whether you’re craving a pizza or noodles, we’ve got you covered!
        </p>
      </div>

      <div className="circle floating-circle">
        <h2>Why Choose Us?</h2>
        <p>
          We focus on using fresh ingredients, crafting each dish with love, and creating a cozy ambiance for memorable moments.
        </p>
      </div>

      <div className="circle floating-circle">
        <h2>Join Our Food Journey</h2>
        <p>
          Stop by and explore our diverse menu. There’s something delicious waiting for everyone!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
