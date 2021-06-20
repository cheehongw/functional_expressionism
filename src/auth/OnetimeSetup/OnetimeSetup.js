import { useState, useEffect, useContext } from "react";
import {
  Avatar,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { AuthContext } from "../use-auth.js";
import StorageHandler from "../../UserStorage/UserStorageHandler";
import { Redirect, withRouter } from "react-router";
import { useStyles } from "./OnetimeSetup.page.style.js";

const db = StorageHandler.firestore();
const storageRef = StorageHandler.storage().ref();

function OnetimeSetup({ history }) {
  const classes = useStyles();
  const { currentUser, doneOnetimeSetup } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    console.log(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;

    if (username.length >= 4) {
      const usernameExist = await db
        .collection("users")
        .where("username", "==", username)
        .get();
      if (usernameExist.docs.length > 0) {
        setError("Username already exists");
      } else {
        const fileRef = storageRef.child(
          "/" + currentUser.uid.toString() + "/" + selectedFile.name
        );
        await fileRef.put(selectedFile);
        const avatarUrl = await fileRef.getDownloadURL();
        await db
          .collection("users")
          .doc(currentUser.uid.toString())
          .set({ username: username, avatarUrl: avatarUrl });
        history.push("/");
      }
    } else {
      setError("Username must be longer than 4 characters");
    }
  };

  return doneOnetimeSetup ? (
    <Redirect to="/" />
  ) : (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          One-time Setup
        </Typography>
        {selectedFile == null ? (
          <Avatar className={classes.avatar} />
        ) : (
          <Avatar src={preview} alt="not work" className={classes.avatar} />
        )}
        <form onSubmit={onSubmit}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            type="file"
            onChange={onSelectFile}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          {error ? (
            <TextField
              error
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              helperText={error}
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
            color="secondary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(OnetimeSetup);
