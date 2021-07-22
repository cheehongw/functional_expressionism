import { useState, useEffect } from "react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import DisplayButton from "../component/DisplayButton/DisplayButton";
import DisplayCard from "../component/DisplayCard/DisplayCard";
import useStyles from "./RandomDish.page.style";
import { Container, CircularProgress } from "@material-ui/core";
import TinderCard from "react-tinder-card";
import Header from "../../../components/Header";
import { ReactComponent as HealthyIcon } from "../../../assets/healthy-eating.svg";
import { ReactComponent as HappyIcon } from "../../../assets/happy.svg";
import { ReactComponent as SadIcon } from "../../../assets/sad.svg";

function RandomDish() {
  const classes = useStyles();

  const [cards, setCards] = useState([]);
  const cardRef = React.createRef();
  const [finalDecision, setFinalDecision] = useState(null);
  const matches = useMediaQuery("(max-width: 640px)");

  async function fetchAPIData() {
    const response = await fetch(
      "https://functional-expressionism-api.herokuapp.com/dishes/random/?number=7&verbose=true"
    );
    const cardResponse = await response.json();
    return cardResponse;
  }

  useEffect(() => {
    fetchAPIData().then((result) => setCards(result));
  }, []);

  const normalSwipe = (dir, card) => {
    var temp = cards;
    if (dir === "right") {
      temp.push(card);
    }
    setCards(temp.slice(1));
  };

  const finalSwipe = (dir) => {
    if (dir === "right") {
      setFinalDecision(true);
    } else {
      setFinalDecision(false);
    }
  };

  const swipeLeftButton = () => {
    cardRef.current.swipe("left");
  };

  const swipeRightButton = () => {
    cardRef.current.swipe("right");
  };

  return cards.length === 0 ? (
    <div className={classes.loading}>
      <CircularProgress size={"4rem"}></CircularProgress>
      <Typography variant={"h4"}> Fetching data... </Typography>
    </div>
  ) : (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          {!matches ? (
            finalDecision === null ? (
              <HealthyIcon className={classes.icon} />
            ) : finalDecision ? (
              <HappyIcon className={classes.icon} />
            ) : (
              <SadIcon className={classes.icon} />
            )
          ) : (
            <></>
          )}
          <div className={classes.statusContainer}>
            {cards.length > 1 ? (
              <Typography
                component="h1"
                variant="h5"
                className={classes.status}
              >
                Our random suggestions!
              </Typography>
            ) : finalDecision === null ? (
              <Typography
                component="h1"
                variant="h4"
                className={classes.status}
              >
                Your dish for today?
              </Typography>
            ) : finalDecision ? (
              <Typography
                component="h1"
                variant="h4"
                className={classes.status}
              >
                Bon Appétit
              </Typography>
            ) : (
              <Typography
                component="h1"
                variant="h4"
                className={classes.status}
              >
                We have no suggestion left
              </Typography>
            )}
          </div>

          {cards.length > 1 ? (
            <TinderCard
              className={classes.swipe}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={(dir) => normalSwipe(dir, cards[0])}
              key={cards[0]._id}
              ref={cardRef}
            >
              <DisplayCard dishData={cards[0]} />
            </TinderCard>
          ) : finalDecision === null ? (
            <TinderCard
              className={classes.swipe}
              preventSwipe={["up", "down"]}
              onCardLeftScreen={(dir) => finalSwipe(dir)}
              key={cards[0]._id}
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
    </div>
  );
}

export default RandomDish;
