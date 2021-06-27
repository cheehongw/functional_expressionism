import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./Loading.page.style";
import CircleLoader from "react-spinners/CircleLoader";

function Loading() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography className={classes.text} component="h1" variant="h5">
          Loading...
        </Typography>
        <CircleLoader color="#107896" loading={true} size={100} />
      </div>
    </Container>
  );
}

export default Loading;
