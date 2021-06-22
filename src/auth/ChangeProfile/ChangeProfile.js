import { useState, useEffect, useContext } from "react";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { AuthContext } from "../use-auth.js";
import StorageHandler from "../../userstorage/UserStorageHandler";
import { withRouter } from "react-router";
import { useStyles } from "./ChangeProfile.page.style.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Alert, AlertTitle } from "@material-ui/lab";

const db = StorageHandler.firestore();
const storageRef = StorageHandler.storage().ref();

function ChangeProfile({ history }) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const [usernameError, setUsernameError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setFileError("");
    setSelectedFile(e.target.files[0]);
  };

  const onSubmitUsername = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    if (username.length >= 4) {
      const usernameExist = await db
        .collection("users")
        .where("username", "==", username)
        .get();
      if (usernameExist.docs.length > 0) {
        setUsernameError("Username already exists");
      } else {
        await db
          .collection("users")
          .doc(currentUser.uid.toString())
          .update({ username: username });
        await currentUser.updateProfile({ displayName: username });
        history.push("/profile");
      }
    } else {
      setUsernameError("Username must be longer than 4 characters");
    }
  };

  const onSubmitFile = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const fileRef = storageRef.child(
        "/" + currentUser.uid.toString() + "/" + selectedFile.name
      );
      await fileRef.put(selectedFile);
      const avatarUrl = await fileRef.getDownloadURL();
      await currentUser.updateProfile({
        photoURL: avatarUrl,
      });
      history.push("/profile");
    } else {
      setFileError("No avatar image chosen");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <AccountCircleIcon className={classes.icon} />
        <Typography className={classes.title} component="h1" variant="h4">
          Profile Change
        </Typography>
        <Typography className={classes.imagetext} variant="h5">
          Change your avatar
        </Typography>
        {selectedFile == null ? (
          <Avatar className={classes.avatar} src={currentUser.photoURL} />
        ) : (
          <Avatar src={preview} alt="not work" className={classes.avatar} />
        )}
        <form className={classes.form} onSubmit={onSubmitFile}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={onSelectFile}
          />
          {fileError ? (
            <Alert severity="error">
              <AlertTitle>{fileError}</AlertTitle>
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="secondary" component="span">
                  Browse Files
                </Button>
              </label>
            </Alert>
          ) : (
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="secondary" component="span">
                Browse Files
              </Button>
            </label>
          )}

          <Button
            className={classes.submit1}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Apply avatar change
          </Button>
        </form>
        <Typography className={classes.usernametext} variant="h5">
          or change the username
        </Typography>
        <form onSubmit={onSubmitUsername}>
          {usernameError ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              helperText={usernameError}
            />
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
          )}
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Apply username change
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(ChangeProfile);
