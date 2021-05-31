import React from "react";
import Header from '../components/Header.js';

const NotFound = () => {
    //URL for the cute 404 illustration. Obtained from irasutoya.
    const irasutoya404 = "https://1.bp.blogspot.com/-d3vDLBoPktU/WvQHWMBRhII/AAAAAAABL6E/Grg-XGzr9jEODAxkRcbqIXu-mFA9gTp3wCLcBGAs/s400/internet_404_page_not_found.png";

    return (
        <div className="LocationList">
            <Header> TinFood </Header>
            <img src={irasutoya404} alt="404 not found" />
        </div>
    );
};

export default NotFound;