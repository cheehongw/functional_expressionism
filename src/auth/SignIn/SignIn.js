import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import authHandling from "../AuthHandler.js";
import { AuthContext } from "../use-auth.js";
import firebase from "firebase/app";
import { useStyles } from "./SignIn.page.style";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Container,
  SvgIcon,
} from "@material-ui/core";
import { ReactComponent as Google } from "../search.svg";

function GoogleIcon(props) {
  return (
    <SvgIcon {...props}>
      <Google />
    </SvgIcon>
  );
}

function Login({ history }) {
  const classes = useStyles();
  const [persist, setPersist] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        if (persist) {
          await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        } else {
          await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        await authHandling
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        if (currentUser) {
          if (currentUser.emailVerified) {
            history.push("/");
          }
        } else {
          setError("This email is not verified");
        }
      } catch (error) {
        setError(error.message);
      }
    },
    [currentUser, persist, history]
  );

  const handleGoogleSignIn = useCallback(async () => {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    try {
      await authHandling.auth().signInWithPopup(provider);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  }, [history]);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
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
          onClick={handleGoogleSignIn}
          size="large"
          fullWidth
          startIcon={<GoogleIcon className={classes.icon} />}
        >
          SIGN IN WITH GOOGLE
        </Button>

        <Typography component="h1" variant="h5">
          or
        </Typography>
        <form className={classes.form} onSubmit={handleLogin} noValidate>
          {error ? (
            <TextField
              error
              variant="outlined"
              label="Email"
              margin="normal"
              fullWidth
              name="email"
              id="email"
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

          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Remember me"
            onClick={() => {
              setPersist(!persist);
            }}
          />
          <Button
            className={classes.email}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            SIGN IN WITH EMAIL
          </Button>
        </form>
        <Button className={classes.forgot} href="#" color="primary">
          Forgot password?
        </Button>
        <Button className={classes.signup} href="/signup" color="primary">
          Don't have an account? Sign Up
        </Button>
      </div>
    </Container>
  );
}

export default withRouter(Login);
