import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./DisplayButton.component.style";

export default function CardButtons({ left, right }) {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={6} className={classes.iconButtonContainerLeft}>
        <Button
          className={classes.cross}
          startIcon={<CloseRoundedIcon />}
          onClick={left}
        >
          Swipe Left
        </Button>
      </Grid>

      <Grid item xs={6} className={classes.iconButtonContainerRight}>
        <Button
          className={classes.favorite}
          endIcon={<FavoriteIcon />}
          onClick={right}
        >
          Swipe Right
        </Button>
      </Grid>
    </Grid>
  );
}
