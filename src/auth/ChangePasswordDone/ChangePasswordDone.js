import { Container, Typography, Link } from "@material-ui/core";
import { withRouter } from "react-router";
import { useStyles } from "./ChangePasswordDone.page.style";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ChangePasswordDone({ history }) {
  const classes = useStyles();

  setTimeout(() => {
    history.push("/");
  }, 4000);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <CheckCircleIcon className={classes.icon} />
        <Typography variant="body1">
          You have successfully changed the password
        </Typography>
        <Typography variant="body1">
          You will be redirected back to the main page
        </Typography>
        <Typography variant="subtitle1">
          If you are not redirected, click on this <Link href="/">link</Link>
        </Typography>
      </div>
    </Container>
  );
}

export default withRouter(ChangePasswordDone);
