import { useContext } from "react";
import { AuthContext } from "../../auth/use-auth";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./Profile.page.style";
import Header from "../../components/Header";
//import StorageHandler from "../../UserStorage/UserStorageHandler";

// const db = StorageHandler.firestore();

// To be developed later
function Profile() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className={classes.paper}>
        <Avatar
          className={classes.avatar}
          src={currentUser.photoURL}
          alt="Profile"
        ></Avatar>
        <Typography variant="h5">{currentUser.displayName}</Typography>
      </div>
    </div>
  );
}

export default Profile;
