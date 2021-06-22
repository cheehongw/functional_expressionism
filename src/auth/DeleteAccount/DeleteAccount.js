import { useContext, useState } from "react";
import { useStyles } from "./DeleteAccount.page.style";
import { AuthContext } from "../use-auth.js";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

function DeleteAccount({ history }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const reauthenticate = async (currentPassword) => {
    var cred = firebase.auth.EmailAuthProvider.credential(
      currentUser.email,
      currentPassword
    );
    try {
      await currentUser.reauthenticateWithCredential(cred);
    } catch (error) {
      setError("Incorrect password or logged in using Google");
    }
  };

  const handleDeletion = (event) => {
    event.preventDefault();
    const { currentPassword } = event.target.elements;
    try {
      reauthenticate(currentPassword.value);
      currentUser.delete();
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <DeleteIcon className={classes.logo} />
        <Typography component="h1" variant="h4">
          Account Deletion
        </Typography>
        <Typography variant="subtitle1">
          Please be sure before deleting!
        </Typography>
        <form className={classes.form} onSubmit={handleDeletion} noValidate>
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="currentPassword"
              type="password"
              label="Current Password"
              name="currentPassword"
              helperText={error}
              autoFocus
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="currentPassword"
              label="Current Password"
              type="password"
              name="currentPassword"
              autoFocus
            />
          )}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Confirm account deletion
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(DeleteAccount);
