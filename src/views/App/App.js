import React from 'react';
import Header from '../../components/Header.js';
import ClickableCard from '../../components/ClickableCard.js';
import { Container, Typography } from '@material-ui/core';
import styles from './App.module.css';


export default function App() {

  return (
    <div className="">
      <Header className={styles.appHeader} URL="/" />

      <div className={styles.title} disableGutters={true}>
        <Typography className={styles.text} variant='h1'>
          TinFood
        </Typography>
      </div>


      <ClickableCard URL="/locations">Locations</ClickableCard>
      <ClickableCard URL='/suggestions'>I'm Feeling Lucky</ClickableCard>
    </div>
  );
}
