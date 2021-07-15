import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StallItem } from "./StallItem";
import { CircularProgress, List, Typography } from '@material-ui/core';
import Header from '../../components/Header.js';
import { CollapsingChipMenu } from "../../components/CollapsingChipMenu";
import styles from "./StallList.module.css"
import { ReactComponent as MapIcon } from "../../assets/map.svg";


/**
 * The viewpage that contains the list of stalls per given location
 */
export default function StallList(props) {

  //locationObj refers to the physical location of the stall,
  //props.location refers to the location object from react-router-dom
  const locationObj = props.location.state;

  const { LocationID } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [stallList, setStallList] = useState([]);
  const [sortingBy, setSortingBy] = useState("Alphabetical");

  useEffect(() => {
    fetch(`https://functional-expressionism-api.herokuapp.com/locations/${LocationID}/stalls`)
      .then(res => res.json())
      .then(res => { 
        setStallList(res);
        setIsLoaded(true);
      })
  }, [LocationID]);

  useEffect(() => {
    if (!isLoaded) {
    }else if (sortingBy === "Rating") {
      setStallList((stallList) =>
        stallList.slice().sort((a, b) => {
          return a.rating - b.rating;
        })
      );
    } else {
      //default sort by alphabetical
      setStallList((stallList) =>
        stallList.slice().sort((a, b) => {
          return a.stallName < b.stallName ? -1 : 1;
        })
      );
    }
  }, [isLoaded, sortingBy])

  return (
    <div>
      <Header> TinFood </Header>
      <div className={styles.header}>
        <p className={styles.item_a}> Here are the stalls at </p>
        <p className={styles.item_b}> {locationObj.locationName} </p>
        <MapIcon className={styles.icon} />
      </div>

      <CollapsingChipMenu
        selector={['Price', 'Rating', 'Alphabetical']}
        childData={setSortingBy} />

      <List disablePadding={true} >
        { !isLoaded
          ? <div className={styles.loading}>
            <CircularProgress size={'4rem'}></CircularProgress>
            <Typography variant={"h4"}> Fetching data... </Typography>
            </div>
          : stallList.map(
          (stall) => (
            <StallItem
              key={stall.stallName}
              toolTip={sortingBy}
              stallObject={stall}
              locationObj={locationObj}
            />
          ))}
      </List>

    </div>
  );


}