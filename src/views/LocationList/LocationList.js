import React, { useState } from "react";
import Header from '../../components/Header.js';
import ClickableCard from '../../components/ClickableCard.js';
import { List, ListItem, Typography } from '@material-ui/core';
import styles from './LocationList.module.css';

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
    <div className="LocationList">
      <Header> TinFood </Header>

      {/* Temporary button */}
      <button onClick={refreshList}> Refresh </button>

      <List>
        {locationList.map(
          (location) => (
            <ListItem key={location.locationName}> {/* remember to change key*/}
              <ClickableCard disablePadding={true} URL={location.locationURL}>
                {/* <------- start of card content ------> */}
                <div className={styles.div}>
                  <img className={styles.cardImage}
                    src={location.locationImage}
                    alt={location.locationName} />
                    
                  <span className={styles.item1}>
                    <Typography>
                      {location.locationName}
                    </Typography>
                  </span>
                </div>
                {/* <------ end of card content ------> */}
              </ClickableCard>
            </ListItem>))
        }
      </List>

    </div>
  );
};

export default LocationList;