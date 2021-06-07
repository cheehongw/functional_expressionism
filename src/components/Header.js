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
					<div className={classes.container} >
						<img 
						className={classes.img} //styling  
						onClick={navigateTo} //onClick functionality
						src={process.env.PUBLIC_URL + '/logo192.png'} alt="logo" />
						<Typography onClick={navigateTo} variant="h6" color="inherit" className={classes.title}>
							TinFood
						</Typography>
					</div>
					<LoginMenuButton color="inherit"></LoginMenuButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	container: {
		display: "flex",
		columnGap: "0.5em",
		position: "relative",
   	 	alignItems: "center",
		flexGrow: 1,
		maxHeight: "48px",
		paddingLeft: "24px",
    	paddingRight: "24px",
	},

	img: {
		maxHeight: "inherit",
	},

	title: {
		maxHeight: "inherit",
	},
}));