import { useContext } from "react";
import { AuthContext } from "../../auth/use-auth";
import { Avatar, Typography } from "@material-ui/core";
import { useStyles } from "./Profile.page.style";
import Header from "../../components/Header";
import { Button } from "@material-ui/core";

function Profile() {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <div className={classes.title}></div>
      <div className={classes.paper}>
        <Avatar
          className={classes.avatar}
          src={currentUser.photoURL}
          alt="Profile"
        ></Avatar>
        <Typography variant="h5">{currentUser.displayName}</Typography>

        <Button href="/profile/passwordchange" color="primary">
          Change user password
        </Button>
        <Button href="/profile/profilechange" color="primary">
          Change user profile
        </Button>
        <Button href="/profile/accountdelete" color="primary">
          Delete account
        </Button>
      </div>
    </div>
  );
}

export default Profile;
