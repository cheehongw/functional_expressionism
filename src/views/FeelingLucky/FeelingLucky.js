import { useState } from "react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import DisplayButton from "./component/DisplayButton/DisplayButton";
import DisplayCard from "./component/DisplayCard/DisplayCard";
import useStyles from "./FeelingLucky.page.style";
import { Container } from "@material-ui/core";
import TinderCard from "react-tinder-card";

const INITIAL_CARDS_STATE = [
  {
    dishName: "Fried rice with smoked duck",
    dishImageLink: "https://i.imgur.com/DAZyILR.jpg",
    stall: "Mixed vegetable rice",
    location: "YIH",
    rating: 2.5,
    price: 10.5,
  },
  {
    dishName: "Fried chicken with chili pepper sauce and fries",
    dishImageLink: "https://i.imgur.com/G9jh4QW.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 3.5,
    price: 9.5,
  },
  {
    dishName: "Detroit Pizza",
    dishImageLink: "https://i.imgur.com/1CQMUXz.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 5,
    price: 6.5,
  },
  {
    dishName: "Chicken sandwich",
    dishImageLink: "https://i.imgur.com/xBgyqMD.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 1.5,
    price: 4.5,
  },
  {
    dishName: "Miso butter ramen",
    dishImageLink: "https://i.imgur.com/Z58KcuZ.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 4.3,
    price: 5.6,
  },
];

function FeelingLucky() {
  const classes = useStyles();

  const [cards, setCards] = useState(INITIAL_CARDS_STATE);
  const cardRef = React.createRef();
  const [finalDecision, setFinalDecision] = useState(null);

  const normalSwipe = async (dir, card) => {
    var temp = cards;
    if (dir === "right") {
      temp.push(card);
    }
    await setCards(temp.slice(1));
  };

  const finalSwipe = async (dir) => {
    if (dir === "right") {
      await setFinalDecision(true);
    } else {
      await setFinalDecision(false);
    }
  };

  const swipeLeftButton = () => {
    cardRef.current.swipe("left");
  };

  const swipeRightButton = () => {
    cardRef.current.swipe("right");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        {cards.length > 1 ? (
          <Typography component="h1" variant="h5">
            Choosing what you like
          </Typography>
        ) : finalDecision === null ? (
          <Typography component="h1" variant="h5">
            Should this be the dish for today?
          </Typography>
        ) : finalDecision ? (
          <Typography component="h1" variant="h5">
            Bon Appétit
          </Typography>
        ) : (
          <Typography component="h1" variant="h5">
            We have no suggestion left
          </Typography>
        )}
        {cards.length > 1 ? (
          <TinderCard
            className={classes.swipe}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={(dir) => normalSwipe(dir, cards[0])}
            key={cards[0].dishName}
            ref={cardRef}
          >
            <DisplayCard dishData={cards[0]} />
          </TinderCard>
        ) : finalDecision === null ? (
          <TinderCard
            className={classes.swipe}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={(dir) => finalSwipe(dir)}
            key={cards[0].dishName}
            ref={cardRef}
          >
            <DisplayCard dishData={cards[0]} />
          </TinderCard>
        ) : finalDecision ? (
          <DisplayCard dishData={cards[0]} />
        ) : (
          <img src="NoSuggestion.png" alt="Thinking cat" />
        )}
        {cards.length > 1 ? (
          <DisplayButton left={swipeLeftButton} right={swipeRightButton} />
        ) : finalDecision === null ? (
          <DisplayButton left={swipeLeftButton} right={swipeRightButton} />
        ) : finalDecision ? (
          <Typography></Typography>
        ) : (
          <Typography variant="body1">
            thinking of a better suggestion
          </Typography>
        )}
      </div>
    </Container>
  );
}

export default FeelingLucky;
