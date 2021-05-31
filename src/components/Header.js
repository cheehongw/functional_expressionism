import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import LoginMenuButton from './LoginMenuButton.js'

/**
 * Header bar component for webapp.
 * 
 * props.children: element to be displayed in the header bar
 */
export default function Header(props) {

	const classes = useStyles();
	const history = useHistory();
    const navigateTo = () => history.push('/');

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					<Typography onClick={navigateTo} variant="h6" color="inherit" className={classes.title}>
						{props.children}
					</Typography>
					<LoginMenuButton color="inherit">Login</LoginMenuButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	title: {
		flexGrow: 1,
	},
}));