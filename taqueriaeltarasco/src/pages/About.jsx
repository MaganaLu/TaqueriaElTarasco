
import './About.css';
import React, { useState, useEffect } from "react";

import PageHeader from '../components/PageHeader.jsx';

import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");

  return (
    <>
      <PageHeader image='../assets/NatureImage.jpg' hText="About" />


    </>
  )
};

export default About