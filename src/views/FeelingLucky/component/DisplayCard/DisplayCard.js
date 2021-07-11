import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useStyles } from "./DisplayCard.component.style";
import { Textfit } from "react-textfit";

export default function DisplayCard(props) {
  const { dishData } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={dishData.dishImageLink} />
      <CardContent className={classes.content}>
        <Textfit
          className={classes.dishName}
          mode="single"
          onReady={console.log("rdy")}
        >
          {dishData.dishName}
        </Textfit>
        <Typography className={classes.location} variant="subtitle1">
          {dishData.stall}, {dishData.location}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Rating
          name="size-large"
          value={dishData.rating}
          precision={0.1}
          readOnly
        />
        <Typography variant="h6" className={classes.wrapIcon}>
          <AttachMoneyIcon className={classes.linkIcon} />
          {dishData.price}
        </Typography>
      </CardActions>
    </Card>
  );
}
