import React, { useState } from "react";
import Header from '../../components/Header.js';
import { List } from '@material-ui/core';
import LocationItem from "./LocationItem.js";


//currently a dummy list.
//in the future, API GET request will return a list of locations 
//with similar structure for each location
import dummyList from './dummyList.js';

const LocationList = () => {

  const [locationList, setLocationList] = useState(dummyList.dummyList);

  //temporary placeholder logic to update the list
  const refreshList = () => setLocationList(
    locationList.concat([{ 'locationName': 'test', 'locationURL': '/test' }]));

  return (
    <div>
      <Header> TinFood </Header>

      {/* Temporary button */}
      <button onClick={refreshList}> Refresh </button>

      <List>
        {locationList.map(
          (l) => (
            <LocationItem 
              key={l.locationName}
              locationName={l.locationName}
              locationDesc={l.locationDesc}
              locationURL={l.locationURL}
              locationImage={l.locationImage}
              locationCoords={l.locationCoords}
            />
          ))}
      </List>

    </div>
  );
};

export default LocationList;