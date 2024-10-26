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
          <Menucard image={menuEntry.thumbnail} type={menuEntry.type} imageAlt={menuEntry.type} itemName={menuEntry.itemName} price={menuEntry.price} Description={menuEntry.description} />

        </ul>)
      )
    }
  }
  
  parseLists();

  return (
    <>
      <PageHeader image='../assets/NatureImage.jpg' hText="Menu" />

      <div className="menuOuterContainer">
        <div className="menuInnerContainer">

          <hr></hr>
          <h1>Specials</h1>
          <hr></hr>
          <div className="portfolioCardContainer">
            {checkUndefinedSection("Specials")}
          </div>

          <hr></hr>
          <h1>Main Course</h1>
          <hr></hr>
          <div className="portfolioCardContainer">
            {checkUndefinedSection("MainCourse")}
          </div>

          <hr></hr>
          <h1>Drinks</h1>
          <hr></hr>
          <div className="portfolioCardContainer">
            {checkUndefinedSection("Drinks")}
          </div>

        </div>
      </div>

    </>
  )
};

export default Menu