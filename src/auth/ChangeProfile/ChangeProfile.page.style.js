import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
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
    color: "#0493CE",
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
  form2: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(5),
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
  submit1: {
    marginTop: theme.spacing(1.5),
  },
  title: {
    marginTop: theme.spacing(2),
  },
  browsebtn: {
    backgroundColor: "#3f8cb5",
    color: "#fafafa",
  },
}));
