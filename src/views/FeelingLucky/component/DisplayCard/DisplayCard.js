import { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useStyles } from "./DisplayCard.component.style";

export default function DisplayCard(props) {
  const { dishData } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={dishData.dishImageLink} />
      <CardContent>
        <Typography variant="h6" component="h1">
          {dishData.dishName}
        </Typography>
        <Typography variant="subtitle1">
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
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4">Reviews</Typography>
          <Typography variant="body1">Placeholder</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
