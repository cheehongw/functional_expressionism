import React from 'react';
import Header from '../../components/Header.js';
import ClickableCard from '../../components/ClickableCard.js';
import styles from './App.module.css';
import { Typography } from '@material-ui/core';

export default function App() {
  return (
    <div className="">
      <Header className={styles.appHeader} URL="/" />

      <div className={styles.title}>
        <h1 className={styles.text}>TinFood</h1>
      </div>

      <div className={styles.options}>
        <ClickableCard URL="/locations">
          <Typography>
            Locations
          </Typography>
        </ClickableCard>
        
        <ClickableCard URL='/suggestions'>
          <Typography>
            I'm Feeling Lucky
          </Typography>
        </ClickableCard>
      </div>
    </div>
  );
}
