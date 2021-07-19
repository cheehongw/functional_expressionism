import { Chip, Collapse, List, ListItem, Typography } from "@material-ui/core";
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
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
}
