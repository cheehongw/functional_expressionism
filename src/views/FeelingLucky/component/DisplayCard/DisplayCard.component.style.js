import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  wrapIcon: {
    display: "inline-flex",
    fontFamily: "Pacifico",
    fontSize: "1.5rem",
  },
  linkIcon: {
    color: "#30800D",
    marginTop: theme.spacing(1.3),
  },
  actions: {
    flexDirection: "row",
    verticalAlign: "middle",
    justifyContent: "space-around",
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  dishName: {
    fontFamily: "Caveat",
    fontWeight: 700,
  },
  location: {
    fontFamily: "Caveat",
    fontWeight: 500,
  },
  content: {
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    paddingTop: theme.spacing(1.5),
  },
}));
