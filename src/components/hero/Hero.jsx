import React from 'react';
import './hero.css';
import Hero_Image from '../../img/hero-background.png'

const Hero = () => {
  return (
    <section className="hero">

      {/* Image */}
      <img
        src={Hero_Image} // Replace with the actual path to your image
        alt="Fitness Hero"
        className="hero-image"
      />

      {/* Text Content */}
      <div className="hero-content">
        <h1>Unleash Your Potential <span>Home Workouts</span>, Your Way</h1>
        <p>Discover and engage in effective home workouts at your convenience.</p>
        {/* Call-to-Action Button (e.g., Explore Workouts) */}
        <button className='hero__button'>Start-Now</button>
      </div>
    </section>
  )
}

export default Hero
