import { Container, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./Loading.page.style";

function Loading() {
  const classes = useStyles();

  return (
    <Container className={classes.paper} component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5">
          Loading...
        </Typography>
        <CircularProgress className={classes.circular} />
      </div>
    </Container>
  );
}

export default Loading;
