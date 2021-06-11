import React, { useState } from "react";
import Header from '../components/Header.js';
import ClickableCard from '../components/ClickableCard.js';
import { List, ListItem } from '@material-ui/core';

//currently a dummy list.
//in the future, API GET request will return a list of stalls with similar structure for each stall
const dummyList = [{
  'locationName': 'abc',
  'locationURL': '/abc'
}, {
  'locationName': 'def',
  'locationURL': '/def'
}, {
  'locationName': 'ghi',
  'locationURL': '/ghi'
}, {
  'locationName': 'stalls',
  'locationURL': '/stalls'
}
];


const LocationList = () => {

  //currently using a dummy list as the initial list state.
  const [locationList, setLocationList] = useState(dummyList);

  //temporary placeholder logic to update the list
  const refreshList = () => setLocationList(locationList.concat([{ 'locationName': 'test', 'locationURL': '/test' }]));

  return (
    <div className="LocationList">
      <Header> TinFood </Header>

      {/* Temporary button */}
      <button onClick={refreshList}> Refresh </button>
      <List>
        {locationList.map(
          (location) => (
            <ListItem>
              <ClickableCard URL={location.locationURL}> {location.locationName} </ClickableCard>
            </ListItem>))
        }
      </List>

    </div>
  );
};

export default LocationList;