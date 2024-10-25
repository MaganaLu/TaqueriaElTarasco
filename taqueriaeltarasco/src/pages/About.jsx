
import './About.css';
import React, { useState, useEffect } from "react";

import PageHeader from '../components/PageHeader.jsx';

import { useNavigate } from "react-router-dom";

import avocadoBg from '../assets/avocadoBg.jpg';

const About = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");

  return (
    <>
      <PageHeader hText="About" />
      <div className='aboutOuterContainer'>
        <div className='aboutInnerContainer'>

          <div className='storyContainer'>
            <h1>Our Story</h1>
            <hr />
            <p>Started from a Taco Truck and now evolved into a restaurant. Step into a world of vibrant flavors and cultural richness at Taqueria El Tarasco, the newest culinary gem in Wenatchee, Washington. Our restaurant embodies the spirit of Mexico, bringing an authentic and contemporary twist to traditional Mexican cuisine. </p>
          </div>

          <div className='mottoContainer'>
            <h1>Our Motto</h1>
            <hr />
            <p>Bringing Michoacan's Flavors to Wenatchee: A Taste of Mexico's Heartbeat. It's a testament to the power of food to transcend borders and bring communities together. It's an invitation to savor the vibrancy of Michoacan, right in the heart of Wenatchee, and to celebrate the universal language of flavors that unite us all.</p>
          </div>
        </div>

        <div className='aboutBottomDiv'>
          <div className='aboutImageDiv'>
            <img className='aboutImage' src={avocadoBg} />
          </div>
          <div className='aboutOverlayText'>
            <h1> Authentic Michoacan Tacos</h1>
            <p1>We utilize premium cuts of meat and the freshest ingredients to craft our salsas and prepare all our meals from scratch on a daily basis</p1>
          </div>

        </div>

      </div>

    </>
  )
};

export default About