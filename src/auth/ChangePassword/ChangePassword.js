import { useContext, useState } from "react";
import { useStyles } from "./ChangePassword.page.style";
import { Button, Container, TextField, Typography } from "@material-ui/core";
import ChangePasswordDone from "../ChangePasswordDone/ChangePasswordDone";
import { AuthContext } from "../use-auth.js";
import firebase from "firebase/app";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

function ChangePassword() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);
  const { currentUser } = useContext(AuthContext);

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

  const changePassword = async (currentPassword, newPassword) => {
    try {
      reauthenticate(currentPassword);
      await currentUser.updatePassword(newPassword);
      setComplete(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    const { currentPassword, newPassword, retypePassword } =
      event.target.elements;
    if (newPassword.value === retypePassword.value) {
      changePassword(currentPassword.value, newPassword.value);
    } else {
      setError("You retyped the wrong password");
    }
  };

  return complete ? (
    <ChangePasswordDone />
  ) : (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <VpnKeyIcon className={classes.logo} />
        <Typography component="h1" variant="h4">
          Password Change
        </Typography>
        <form
          className={classes.form}
          onSubmit={handlePasswordChange}
          noValidate
        >
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
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="newPassword"
              label="New Password"
              type="password"
              name="newPassword"
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="newPassword"
              label="New Password"
              type="password"
              name="newPassword"
            />
          )}
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="retypePassword"
              label="Retype new password"
              type="password"
              name="retypePassword"
              helperText={error.toString()}
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="retypePassword"
              label="Retype new password"
              type="password"
              name="retypePassword"
            />
          )}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
          >
            Confirm password change
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default ChangePassword;
