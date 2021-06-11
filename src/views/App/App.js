import React from 'react';
import Header from '../../components/Header.js';
import ClickableCard from '../../components/ClickableCard.js';
import styles from './App.module.css';


export default function App() {

  return (
    <div className="">
      <Header className={styles.appHeader} URL="/" />

      <div className={styles.title} disableGutters={true}>
        <h1 className={styles.text}>
          TinFood
        </h1>
      </div>

      <div className={styles.options}>
        <ClickableCard URL="/locations">Locations</ClickableCard>
        <ClickableCard URL='/suggestions'>I'm Feeling Lucky</ClickableCard>
      </div>
    </div>
  );
}
