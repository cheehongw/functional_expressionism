import { Chip, Collapse, List, ListItem, Typography } from '@material-ui/core';
import { useState } from 'react';

export default function CollapsingChipMenu(props) {

    const selector = props.selector;

    //Collapse's state
    const [open, setOpen] = useState(false);
    //Base component's display state
    const [base, setBase] = useState('Sort By');

    const toggleCollaspe = () => { setOpen(!open) }

    const handleSelection = (setting) => { 
        props.childData(setting);
        setBase(setting); 
    };

    return (
        <div>
        <Chip 
        onClick={toggleCollaspe} 
        label={<Typography> {base} </Typography>} />
        <Collapse in={open} >
            <List>
                {selector.map((i) => (
                <ListItem key={i}>
                    <Chip onClick={() => handleSelection(i)}
                    label={<Typography> {i} </Typography>} />
                </ListItem>))}
            </List>
        </Collapse>
        </div>
    )

}