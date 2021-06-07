import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'

export default function LoginMenuButton(props) {

    //replace default false value with custom isLoggedIn hook to fetch logged in status
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const loggedInVariant = (<div>
        <Button color={props.color} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <Avatar></Avatar>
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>);

    //do Something to handle onClick situation
    const loggedOutVariant = (
    <div>
        <Button color={props.color} aria-controls="simple-menu" aria-haspopup="true" onClick={null}>
            Login
        </Button>
    </div>);

    return isLoggedIn ? loggedInVariant : loggedOutVariant;
}