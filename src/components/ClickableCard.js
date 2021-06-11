import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((themes) => ({
    root: {
        flexGrow:1,
    },

    button: {
        width: '100%',
        margin: '0 auto',

    },

    content: {
        alignContent: 'center',
        
        //to make cardcontent span the whole buttonbase
        width: '100%', 
        margin: '0 auto',

    },
}));

export default function SimpleCard(props) {
    const classes = useStyles();
    const history = useHistory();

    //short timeout to let users experience animation effect when pressing the button
    const navigateTo = () => setTimeout(() => history.push(props.URL), 50)

    return (
        <Card className={classes.root}>
            <ButtonBase 
                className={classes.button}
                onClick={navigateTo}
            >
                <CardContent className={classes.content}>
                    <Typography className={classes.content}>
                        {props.children}
                    </Typography>
                </CardContent>
            </ButtonBase>
        </Card>
    );
}