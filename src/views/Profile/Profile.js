import { useContext } from "react";
import { AuthContext } from "../../auth/use-auth";
import { Typography } from "@material-ui/core";
//import StorageHandler from "../../UserStorage/UserStorageHandler";

// const db = StorageHandler.firestore();

// To be developed later
function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <Typography variant="h5">{currentUser.displayName}</Typography>
    </div>
  );
}

export default Profile;
