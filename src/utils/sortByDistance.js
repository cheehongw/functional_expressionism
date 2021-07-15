import haversine from 'haversine-distance';

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

 export default function sortbyDistance(locList, currPos) {
    return locList.slice().sort((a, b) => {
      const distanceToA = haversine(a.locationCoords, currPos);
      const distanceToB = haversine(b.locationCoords, currPos);
  
      const output = distanceToA - distanceToB;
  
      return output === 0
        ? (a.locationName < b.locationName ? -1 : 1)
        : output;
    })
  }