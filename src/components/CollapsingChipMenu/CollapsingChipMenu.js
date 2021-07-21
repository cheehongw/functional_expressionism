import { Chip, Collapse, List, ListItem, Typography } from "@material-ui/core";
import { ReactComponent as RatingIcon } from "../../assets/star.svg";
import { ReactComponent as DistanceIcon } from "../../assets/distance.svg";
import { ReactComponent as AlphabetIcon } from "../../assets/abc.svg";
import { ReactComponent as PriceIcon } from "../../assets/money.svg";
import { useRef, useState } from "react";
import styles from "./CollapsingChipMenu.module.css";

export default function CollapsingChipMenu(props) {
  //List of sorting options
  const selector = props.selector;

  //collapsed state
  const [open, setOpen] = useState(false);
  //Base button's display state
  const [base, setBase] = useState("Sort By");

  const onClose = useRef("Sort By");

  const toggleCollaspe = () => {
    setOpen(!open);
  };

  const handleSelection = (setting) => {
    //props.childData is a function passed in from the parent to set the parent's state.
    props.childData(setting);
    onClose.current = setting;
  };

  return (
    <div className={styles.root}>
      <Chip
        onClick={toggleCollaspe}
        label={<Typography> {base} </Typography>}
      />
      <Collapse
        className={styles.collapse}
        in={open}
        onExiting={() => setBase(onClose.current)}
      >
        <List>
          {selector.map((i) => (
            <ListItem key={i}>
              <Chip
                className={styles.selectors}
                onClick={() => handleSelection(i)}
                label={<Typography> {i} </Typography>}
                icon={
                  i === "Rating" ? (
                    <RatingIcon className={styles.icon} />
                  ) : i === "Alphabetical" ? (
                    <AlphabetIcon className={styles.icon} />
                  ) : i === "Distance" ? (
                    <DistanceIcon className={styles.icon} />
                  ) : (
                    <PriceIcon className={styles.icon} />
                  )
                }
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
