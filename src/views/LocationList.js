import React from "react";
import Header  from '../components/Header.js';
import ClickableCard from '../components/ClickableCard.js';

const LocationList = () => {
  return (
    <div className="LocationList">
    <Header> TinFood </Header>
    <ClickableCard URL='/stalls'> Stalls </ClickableCard>
  </div>
  );
};

export default LocationList;