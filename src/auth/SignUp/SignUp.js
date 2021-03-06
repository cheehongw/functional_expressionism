import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import authHandling from "../AuthHandler";
import { AuthContext } from "../use-auth.js";
import firebase from "firebase/app";
import { useStyles } from "./SignUp.page.style";
import SignUpDone from "../SignUpDone/SignUpDone";
import {
  Button,
  TextField,
  Typography,
  Container,
  SvgIcon,
} from "@material-ui/core";
import { ReactComponent as GoogleLogo } from "../search.svg";

function GoogleIcon(props) {
  return (
    <SvgIcon {...props}>
      <GoogleLogo />
    </SvgIcon>
  );
}

function SignUp({ history }) {
  const classes = useStyles();

  const [error, setError] = useState(null);
  const [complete, setComplete] = useState(false);

  const handleSignUp = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await authHandling
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
          userCredential.user.sendEmailVerification();
          authHandling.auth().signOut();
        });
      setComplete(true);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const handleGoogleSignUp = useCallback(async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await authHandling.auth().signInWithPopup(provider);
      history.push("/onetimesetup");
    } catch (error) {
      alert(error.message);
    }
  }, [history]);

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return complete ? (
    <SignUpDone />
  ) : (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <img
          className={classes.logo}
          src="logo192.png"
          alt="Not available"
          width="100"
          height="100"
          onClick={() => history.push("/")}
        />
        <Button
          className={classes.google}
          variant="contained"
          color="primary"
          onClick={handleGoogleSignUp}
          fullWidth
          startIcon={<GoogleIcon className={classes.icon} />}
        >
          CONTINUE WITH GOOGLE
        </Button>

        <Typography component="h1" variant="h5">
          or
        </Typography>
        <form className={classes.form} onSubmit={handleSignUp} noValidate>
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          )}
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              helperText={error.toString()}
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          )}
          <Button
            className={classes.email}
            type="submit"
            fullWidth
            variant="contained"
          >
            CREATE AN ACCOUNT WITH EMAIL
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);
