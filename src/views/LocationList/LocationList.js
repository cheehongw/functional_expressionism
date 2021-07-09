import React, { useEffect, useState } from "react";
import Header from '../../components/Header.js';
import { List } from '@material-ui/core';
import LocationItem from "./LocationItem.js";
import { CollapsingChipMenu } from "../../components/CollapsingChipMenu";
import sortbyDistance from "../../utils/sortByDistance.js";

const geo = navigator.geolocation;

const LocationList = () => {

  const [locationList, setLocationList] = useState([]);
  //used to determine the display state of toolTip
  const [sortingBy, setSortingBy] = useState('Alphabetical');
  const [currPos, setCurrPos] = useState();

  useEffect(() => {
    fetch('https://functional-expressionism-api.herokuapp.com/locations')
    //fetch('http://localhost:3000/locations')
      .then(result => result.json())
      .then(
        result => {
          setLocationList(result);
        })
    },[]);

  useEffect(() => {
    if (sortingBy === 'Distance') {
      geo.getCurrentPosition((pos) => {
        setLocationList(
          locationList => sortbyDistance(locationList, { lat: pos.coords.latitude, lon: pos.coords.longitude }));

        setCurrPos(c => {
          return { lat: pos.coords.latitude, lon: pos.coords.longitude };
        });
      })
    } else if (sortingBy === 'Rating') {
      setLocationList(locationList => locationList.slice().sort((a, b) => {
        return a.rating - b.rating;
      }));
    } else { //default sort by alphabetical
      setLocationList(locationList => locationList.slice().sort((a, b) => {
        return a.locationName < b.locationName ? -1 : 1;
      }));
    }
  }, [sortingBy])

  return (
    <div>
      <Header> TinFood </Header>

      <CollapsingChipMenu
        selector={['Distance', 'Rating', 'Alphabetical']}
        childData={setSortingBy} />

      <List disablePadding={true} >
        {locationList.map(
          (l) => (
            <LocationItem
              key={l.locationName}
              currPos={currPos}
              toolTip={sortingBy}
              locationObj = {l}
            />
          ))}
      </List>

    </div>
  );
};

export default LocationList;