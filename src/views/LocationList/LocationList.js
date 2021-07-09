import React, { useEffect, useState } from "react";
import Header from "../../components/Header.js";
import { List } from "@material-ui/core";
import LocationItem from "./LocationItem.js";
import haversine from "haversine-distance";
import CollapsingChipMenu from "./CollapsingChipMenu.js";

const geo = navigator.geolocation;

/**
 * A function that takes in the user's current position and sorts a list of locations
 * based on their haversine distance to said location, with closest location as the first item.
 *
 * @param {Object[]} locList - The list of locations to be sorted
 * @param {Object} currPos - The current position of the user that is used to calculated the distance.
 * @param {Number} currPos.lat - Latitude of current position
 * @param {Number} currPos.lon - Longitude of current position
 *
 * @returns A new Array reference.
 */
function sortbyDistance(locList, currPos) {
  return locList.slice().sort((a, b) => {
    const distanceToA = haversine(a.locationCoords, currPos);
    const distanceToB = haversine(b.locationCoords, currPos);

    const output = distanceToA - distanceToB;

    return output === 0 ? (a.locationName < b.locationName ? -1 : 1) : output;
  });
}

const LocationList = () => {
  const [locationList, setLocationList] = useState([]);
  //used to determine the display state of toolTip
  const [sortingBy, setSortingBy] = useState("Alphabetical");
  const [currPos, setCurrPos] = useState();

  useEffect(() => {
    fetch("https://functional-expressionism-api.herokuapp.com/locations")
      .then((result) => result.json())
      .then((result) => {
        setLocationList(result);
      });
  }, []);

  useEffect(() => {
    if (sortingBy === "Distance") {
      geo.getCurrentPosition((pos) => {
        setLocationList((locationList) =>
          sortbyDistance(locationList, {
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          })
        );

        setCurrPos((c) => {
          return { lat: pos.coords.latitude, lon: pos.coords.longitude };
        });
      });
    } else if (sortingBy === "Rating") {
      setLocationList((locationList) =>
        locationList.slice().sort((a, b) => {
          return a.rating - b.rating;
        })
      );
    } else {
      //default sort by alphabetical
      setLocationList((locationList) =>
        locationList.slice().sort((a, b) => {
          return a.locationName < b.locationName ? -1 : 1;
        })
      );
    }
  }, [sortingBy]);

  return (
    <div>
      <Header> TinFood </Header>

      <CollapsingChipMenu
        selector={["Distance", "Rating", "Alphabetical"]}
        childData={setSortingBy}
      />

      <List disablePadding={true}>
        {locationList.map((l) => (
          <LocationItem
            key={l.locationName}
            locationName={l.locationName}
            locationDesc={l.locationDesc}
            locationURL={"/notFound"}
            locationImage={l.locationImage}
            locationCoords={l.locationCoords}
            currPos={currPos}
            rating={l.rating}
            toolTip={sortingBy}
          />
        ))}
      </List>
    </div>
  );
};

export default LocationList;
