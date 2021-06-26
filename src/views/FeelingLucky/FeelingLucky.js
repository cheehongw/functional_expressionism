import { useState } from "react";

import Typography from "@material-ui/core/Typography";
import DisplayButton from "./component/DisplayButton/DisplayButton";
import DisplayCard from "./component/DisplayCard/DisplayCard";
import useStyles from "./FeelingLucky.page.style";
import { Container } from "@material-ui/core";
import TinderCard from "react-tinder-card";

const INITIAL_CARDS_STATE = [
  {
    id: 1,
    dishName: "Fried rice with smoked duck",
    dishImageLink: "https://i.imgur.com/DAZyILR.jpg",
    stall: "Mixed vegetable rice",
    location: "YIH",
    rating: 2.5,
    price: 10.5,
  },
  {
    id: 2,
    dishName: "Fried chicken with chili pepper sauce and fries",
    dishImageLink: "https://i.imgur.com/G9jh4QW.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 3.5,
    price: 9.5,
  },
  {
    id: 3,
    dishName: "Detroit Pizza",
    dishImageLink: "https://i.imgur.com/1CQMUXz.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 5,
    price: 6.5,
  },
  {
    id: 4,
    dishName: "Chicken sandwich",
    dishImageLink: "https://i.imgur.com/xBgyqMD.jpg",
    stall: "Japanese & Korean Cuisine",
    location: "Fine Foods",
    rating: 1.5,
    price: 4.5,
  },
  {
    id: 5,
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
  console.log(cards);

  const swiped = (dir, card) => {
    console.log(card.id + " has left the screen");
    if (dir === "right") {
    }
  };

  const outOfFrame = () => {
    var temp = cards;
    setCards(temp.slice(1));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Swiping
        </Typography>
        {cards.length > 0 ? (
          <TinderCard
            className={classes.swipe}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, cards[0])}
            onCardLeftScreen={outOfFrame}
            key={cards[0].dishName}
          >
            <DisplayCard dishData={cards[0]} />
          </TinderCard>
        ) : (
          <Typography variant="h5">End</Typography>
        )}
        {cards.length > 0 ? <DisplayButton /> : <Typography></Typography>}
      </div>
    </Container>
  );
}

export default FeelingLucky;
