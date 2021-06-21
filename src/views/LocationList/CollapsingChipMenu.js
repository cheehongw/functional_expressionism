import { Chip, Collapse, List, ListItem, Typography } from '@material-ui/core';
import { useRef, useState } from 'react';
import styles from './CollapsingChipMenu.module.css';

export default function CollapsingChipMenu(props) {

    const selector = props.selector;

    //Collapse's state
    const [open, setOpen] = useState(false);
    //Base component's display state
    const [base, setBase] = useState('Sort By');

    const fireAfterClose = useRef('Sort By');

    const toggleCollaspe = () => { setOpen(!open) }

    const handleSelection = (setting) => { 
        props.childData(setting);
        fireAfterClose.current = setting;
    };

    return (
        <div>
        <Chip 
        onClick={toggleCollaspe} 
        label={<Typography> {base} </Typography>} />
        <Collapse className={styles.collapse}
        in={open} onExiting={() => setBase(fireAfterClose.current)}>
            <List>
                {selector.map((i) => (
                <ListItem key={i}>
                    <Chip className={styles.selectors} 
                    onClick={() => handleSelection(i)}
                    label={<Typography> {i} </Typography>} />
                </ListItem>))}
            </List>
        </Collapse>
        </div>
    )

}