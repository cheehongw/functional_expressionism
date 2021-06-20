import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
  input: {
    display: "none",
  },
  icon: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  imagetext: {
    marginTop: theme.spacing(2),
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(7),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  upload: {
    marginTop: theme.spacing(1),
  },
  usernametext: {
    marginTop: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export { useStyles };
