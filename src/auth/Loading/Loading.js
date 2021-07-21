import { CircularProgress, Typography } from "@material-ui/core";
import { useStyles } from "./Loading.page.style";

function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress size={"4rem"}></CircularProgress>
      <Typography variant={"h4"}> Loading... </Typography>
    </div>
  );
}

export default Loading;
