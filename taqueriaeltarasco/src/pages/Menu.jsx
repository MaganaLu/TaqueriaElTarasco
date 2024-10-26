import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import "./Menu.css";
import Menucard from "../components/Menucard";
import menuEntries from '../menuEntries.json';


const Menu = () => {
  var sorted = {};

  function parseLists() {

    for (var i = 0, max = menuEntries.length; i < max; i++) {

      if (sorted[menuEntries[i].type] == undefined) {
        sorted[menuEntries[i].type] = [];
      }
      sorted[menuEntries[i].type].push(menuEntries[i]);
    }
  }

  function checkUndefinedSection(arrayString) {
    if (sorted[arrayString] != undefined) {
      return (sorted[arrayString].map(menuEntry =>
        <ul key={menuEntry.title} className="ulPortfolio">
          <Menucard  image={menuEntry.thumbnail}  type={menuEntry.type} />

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

  parseLists();

  return (
    <>
      <PageHeader image='../assets/NatureImage.jpg' hText="Menu" />

      <div className="menuOuterContainer">
        <div className="menuInnerContainer">
          <h1>Test</h1>
          <hr></hr>
          <div className="portfolioCardContainer">
            {checkUndefinedSection("MainCourse")}
          </div>
        </div>
      </div>

    </>
  )
};

export default Menu