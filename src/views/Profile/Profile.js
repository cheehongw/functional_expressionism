import { useContext } from "react";
import { AuthContext } from "../../auth/use-auth";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

// To be developed later
function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Avatar></Avatar>
      <Typography variant="h5">{currentUser.displayName}</Typography>
    </div>
  );
}

export default Profile;
