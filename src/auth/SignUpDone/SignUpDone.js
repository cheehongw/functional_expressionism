// Screen to show that the signing up process is done and the user is
// redirected to the login page

import { Container, Typography, Link } from "@material-ui/core";
import { withRouter } from "react-router";
import { useStyles } from "./SignUpDone.page.style";

function SignUpDone({ history }) {
  const classes = useStyles();

  setTimeout(() => {
    history.push("/signin");
  }, 4000);
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img
          className={classes.image}
          src="/done.png"
          alt="Not available"
          width="200"
          height="200"
        />
        <Typography variant="body1">
          Check your email to verify the account.
        </Typography>
        <Typography variant="body1">
          You will be redirected back to the log in page
        </Typography>
        <Typography variant="overline">
          If you are not redirected, click on this{" "}
          <Link href="/signin">link</Link>
        </Typography>
      </div>
    </Container>
  );
}

export default withRouter(SignUpDone);
