import React, { useState, useEffect } from "react";
import Header from '../../components/Header.js';
import { CircularProgress, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import styles from "./Stall.module.css";
import { Rating } from '@material-ui/lab';
import { StatusIcons } from "../../components/StatusIcons"
import { LikeButton } from '../../components/LikeButton';
import { TabPanel, TabContext } from '@material-ui/lab'
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter.js'
import missing_image from '../../assets/missing_image.png';

/**
 * Viewpage for any given stall.
 * 
 * Displays detailed information about a particular stall.
 */
function Stall(props) {

  const { stallObj, locationObj } = props.location.state;

  //controls the state of the heart button
  const [favouriteState, setFavouriteState] = useState(false); //import user's favourite state here

  //handle Tab state
  const [value, setValue] = useState("0");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const [menu, setMenu] = useState([])
  const [isMenuLoaded, setIsMenuLoaded] = useState(false)

  useEffect(() => {
    fetch(`http://functional-expressionism-api.herokuapp.com/stalls/${stallObj._id}/menu`)
      .then(res => res.ok ? res.json() : new Error('Not OK'))
      .then(res => {
        setMenu(res);
        setIsMenuLoaded(true);
      })
      .catch(err => console.log(err))
  }, [stallObj._id]);

  return (
    <div>
      <Header> TinFood </Header>
      <Paper className={styles.paper}>
        <div className={styles.div}>
          <p className={styles.stall_title}> {stallObj.stallName} </p>
          <p className={styles.desc}> {stallObj.desc ? stallObj.desc : `@${locationObj.locationName}`} </p>
        </div>

        <LikeButton className={styles.heart}
          favouriteState={favouriteState}
          onClick={() => { setFavouriteState(!favouriteState) }}
        />

        <img className={styles.img} src={stallObj.stallImage} alt={stallObj.stallName} />

        <Rating className={styles.rating} value={stallObj.rating} precision={0.1} size='small' readOnly />

        <ul className={styles.statusList}>
          <StatusItem text="Currently Open" icon={StatusIcons(true)} />
          <StatusItem text="Certified Halal" icon={StatusIcons(stallObj.isHalal)} />
        </ul>
        <div className={styles.tabs}>
          <TabContext value={value}>
            <Tabs
              value={value} onChange={handleChange}

              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth" >
              <Tab label="Menu" value="0" />
              <Tab label="Reviews" value="1" disabled />
            </Tabs>

            <TabPanel style={{ padding: '0.875rem' }} value={"0"}>
              <div className={styles.menu}>
                {!isMenuLoaded
                  ? <div className={styles.loading}>
                    <CircularProgress size={'4rem'}></CircularProgress>
                    <Typography variant={"h4"}> Fetching data... </Typography>
                  </div>
                  : menu.map(dish => {
                    return <Dish key={dish._id} dishObj={dish}></Dish>
                  })}
              </div>
            </TabPanel>


            <TabPanel value={"1"}>
              Item Two
            </TabPanel>
          </TabContext>
        </div>
      </Paper>

    </div>
  );
};

export default Stall;

function Dish(props) {

  const { dishObj } = props;

  const { name, price, displayImage, 
    //rating, desc
  } = dishObj

  return (
    <div className={styles.dish}>
      {displayImage
        ? <img className={styles.dish_img} src={displayImage} alt="" />
        : <img className={styles.dish_img} src={missing_image} alt="" />}
      <div className={styles.dish_info}>
        <span><p className={styles.dish_name}> {name} </p></span>
        <div>
          {Object.keys(price).map((priceKey) => {
            return (
              <p className={styles.dish_prices} key={priceKey}>
                {`${capitalizeFirstLetter(priceKey)} : $${price[priceKey].toFixed(2)}`}
              </p>)
          })
          }
        </div>
      </div>
    </div>
  )
}

const StatusItem = (props) => {
  const { text, icon } = props;
  return (
    <li>
      <div className={styles.subitem}>
        <p className={styles.subitem_text}>{text}</p>
        <div className={styles.subitem_icon}>{icon}</div>
      </div>
    </li>

  )
}
