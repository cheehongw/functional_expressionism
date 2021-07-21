import { makeStyles } from "@material-ui/core";
import background from "../../assets/suggestionbackground.jpg";

export const useStyles = makeStyles((theme) => ({
  title: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "bottom",
    height: "25vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontFamily: "Merriweather Sans",
    fontSize: "3em",
    color: "white",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 15vw 10px",
    gap: "10px",
  },
  laptopOptions: {
    display: "flex",
    flexDirection: "row",
    padding: "10px 20vw 10px",
    gap: "10px",
  },
  cardText: {
    fontFamily: "Montserrat",
  },
  cardContent: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column-reverse",
  },
  icon: {
    height: "8rem",
    width: "auto",
  },
}));
