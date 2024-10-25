import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import "./Menu.css";
import Menucard from "../components/Menucard";


const Menu = () => {
  var sorted = {};

  function parseLists() {

    for (var i = 0, max = portfolioEntries.length; i < max; i++) {

      if (sorted[portfolioEntries[i].type] == undefined) {
        sorted[portfolioEntries[i].type] = [];
      }
      sorted[portfolioEntries[i].type].push(portfolioEntries[i]);
    }
  }

  function checkUndefinedSection(arrayString) {
    if (sorted[arrayString] != undefined) {
      return (sorted[arrayString].map(portfolioEntry =>
        <ul key={portfolioEntry.title} className="ulPortfolio">
          <Menucard description={portfolioEntry.description} thumbnail={portfolioEntry.thumbnail} videoLink={portfolioEntry.videoURL} title={portfolioEntry.title} date={portfolioEntry.date} type={portfolioEntry.type} />

        </ul>)
      )
    }
  }

  useEffect(() => {
    const urlHash = window.location.hash;
    if (urlHash.length) {
      const element = document.getElementById(urlHash);
      if (element) {
        setTimeout(function () {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 250);
      }
    }
    return () => {
    };
  }, [])

  //parseLists();

  return (
    <>
      <PageHeader image='../assets/NatureImage.jpg' hText="Menu" />

      <div className="menuOuterContainer">
        <div className="menuInnerContainer">
          <h1>Test</h1>
          <hr></hr>
          <div className="portfolioCardContainer">
            {checkUndefinedSection("Golf Courses")}
          </div>
        </div>
      </div>

    </>
  )
};

export default Menu