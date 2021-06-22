import { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { AuthContext } from "../auth/use-auth";
import authHandling from "../auth/AuthHandler";
import { useHistory } from "react-router-dom";

export default function LoginMenuButton(props) {
  const { currentUser, doneOnetimeSetup } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  let history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loggedInVariant = (
    <div>
      <Button
        color={props.color}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar
          src={currentUser ? currentUser.photoURL : ""}
          alt="Profile"
        ></Avatar>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/profile");
          }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            authHandling.auth().signOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );

  //do Something to handle onClick situation
  const loggedOutVariant = (
    <div>
      <Button
        color={props.color}
        aria-controls="simple-menu"
        aria-haspopup="true"
        href="./signin"
      >
        Login
      </Button>
    </div>
  );
  return currentUser && doneOnetimeSetup ? loggedInVariant : loggedOutVariant;
}
