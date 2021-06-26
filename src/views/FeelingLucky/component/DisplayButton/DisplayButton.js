import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useStyles } from "./DisplayButton.component.style";

export default function CardButtons() {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" className={classes.root}>
      <Grid item xs={6} className={classes.iconButtonContainerLeft}>
        <IconButton aria-label="dislike" className={classes.margin}>
          <CloseRoundedIcon className={classes.cross} fontSize="inherit" />
        </IconButton>
      </Grid>

      <Grid item xs={6} className={classes.iconButtonContainerRight}>
        <IconButton aria-label="like" className={classes.margin}>
          <FavoriteIcon className={classes.favorite} fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
}
