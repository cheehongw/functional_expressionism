import React from "react";
import Header from "../../components/Header.js";
import ClickableCard from "../../components/ClickableCard.js";
import styles from "./App.module.css";
import { makeStyles, Typography } from "@material-ui/core";
import { ReactComponent as StallIcon } from "../../assets/food-stall.svg";
import { ReactComponent as Clover } from "../../assets/clover.svg";

export default function App() {
  const classes = useStyles();

  return (
    <div className="">
      <Header className={styles.appHeader} URL="/" />

      <div className={styles.title}>
        <img
          className={styles.img}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/National_University_of_Singapore%2C_panorama%2C_Nov_06.jpg"
          alt="TinFood homepage"
        />
        <header className={styles.text}>
          Tin<span>Food</span>
        </header>
        <h2 className={styles.subtitle}>
          choose what to eat in <span className={styles.nus}>NUS</span>
        </h2>
        <h2 className={styles.subtitle}>
          <span className={styles.text1}>pick from a listing</span> OR
          <span className={styles.tinder}> swipe like Tinder</span>
        </h2>
      </div>

      <div className={styles.options}>
        <ClickableCard URL="/locations">
          <div className={styles.cardContent}>
            <Typography className={classes.cardText} variant="h6">
              Locations
            </Typography>
            <StallIcon className={styles.icon} />
          </div>
        </ClickableCard>

        <ClickableCard URL="/suggestions">
          <div className={styles.cardContent}>
            <Typography className={classes.cardText} variant="h6">
              I'm feeling lucky
            </Typography>
            <Clover className={styles.icon} />
          </div>
        </ClickableCard>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  cardText: {
    fontFamily: "Montserrat",
  },
}));
