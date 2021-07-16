import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useStyles } from "./DisplayCard.component.style";
import { Textfit } from "react-textfit";
import { useState, useEffect } from "react";

export default function DisplayCard(props) {
  const { dishData } = props;
  const classes = useStyles();
  const [dishNameTextLines, setDishNameTextLines] = useState(null);
  const [location, setLocation] = useState(null);

  const dishNameTextLinesHandler = (name) => {
    if (name.length <= 32) {
      return [name];
    } else {
      let firstLine = "0";
      let secondLine = "1";
      const temp = name.split(" ");
      const averageChar = Math.ceil(name.length / 2);
      let currentIndex = 0;

      while (currentIndex < temp.length) {
        if (firstLine.length + temp[currentIndex].length <= averageChar + 1) {
          firstLine = firstLine.concat(temp[currentIndex]);
          firstLine = firstLine.concat(" ");
        } else {
          break;
        }
        currentIndex++;
      }
      firstLine = firstLine.substring(1, firstLine.length - 1);
      while (currentIndex < temp.length) {
        secondLine = secondLine.concat(temp[currentIndex]);
        secondLine = secondLine.concat(" ");
        currentIndex++;
      }
      secondLine = secondLine.substring(1, secondLine.length - 1);
      return [firstLine, secondLine];
    }
  };

  useEffect(() => {
    const locationID = dishData.stall[0].location;
    fetch(
      "https://functional-expressionism-api.herokuapp.com/locations/" +
        locationID
    )
      .then((response) => response.json())
      .then((response) => response[0].locationName)
      .then((response) => setLocation(response));
  });

  useEffect(
    () => setDishNameTextLines(dishNameTextLinesHandler(dishData.name)),
    [dishData.name]
  );

  return dishNameTextLines !== null && location !== null ? (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          dishData.displayImage === null
            ? "https://i.imgur.com/b3Vv2nq.jpg"
            : dishData.displayImage
        }
      />
      <CardContent className={classes.content}>
        {dishNameTextLines[0].length <= 32 ? (
          <Typography className={classes.dishName} variant="h5" component="h1">
            {dishNameTextLines[0]}
          </Typography>
        ) : (
          <Textfit className={classes.dishName} mode="single" throttle={0}>
            {dishNameTextLines[0]}
          </Textfit>
        )}
        {dishNameTextLines.length === 2 ? (
          dishNameTextLines[1].length <= 32 ? (
            <Typography
              className={classes.dishName}
              variant="h5"
              component="h1"
            >
              {dishNameTextLines[1]}
            </Typography>
          ) : (
            <Textfit className={classes.dishName} mode="single" throttle={0}>
              {dishNameTextLines[1]}
            </Textfit>
          )
        ) : (
          <></>
        )}
        <Typography className={classes.location} variant="subtitle1">
          {dishData.stall[0].stallName}, {location}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Rating
          name="size-large"
          value={dishData.rating === null ? 5 : dishData.rating}
          precision={0.1}
          readOnly
        />
        <Typography variant="h6" className={classes.wrapIcon}>
          <AttachMoneyIcon className={classes.linkIcon} />
          {dishData.price.price !== undefined
            ? dishData.price.price
            : dishData.price.student !== undefined
            ? dishData.price.student
            : dishData.price.public}
        </Typography>
      </CardActions>
    </Card>
  ) : (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          "https://i.kym-cdn.com/photos/images/newsfeed/001/668/803/f75.jpg"
        }
      />
      <CardContent className={classes.content}>
        <Typography className={classes.dishName} variant="h3">
          Loading
        </Typography>
      </CardContent>
    </Card>
  );
}
