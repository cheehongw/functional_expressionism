import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import { useState } from "react";
import { withRouter } from "react-router";
import authHandling from "../AuthHandler";
import { useStyles } from "./ForgotPassword.page.style";

function Forgot({ history }) {
  const classes = useStyles();
  const [error, setError] = useState(null);

  const handlePasswordReset = useCallback(
    async (event) => {
      event.preventDefault();
      const { email } = event.target.elements;
      try {
        await authHandling.auth().sendPasswordResetEmail(email.value);
        history.push("/signin");
      } catch (error) {
        setError(error.message);
      }
    },
    [history]
  );
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
        <Typography className={classes.title} component="h1" variant="h5">
          Password Reset
        </Typography>
        <Typography variant="body1">
          Type the email for password reset
        </Typography>
        <form
          className={classes.form}
          onSubmit={handlePasswordReset}
          noValidate
        >
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
              helperText={error.toString()}
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
          <Button
            className={classes.email}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(Forgot);
