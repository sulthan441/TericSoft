import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: theme.palette.background.default,
    },
    heading: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const PageNotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h1" className={classes.heading}>
                404 - Page Not Found
            </Typography>
            <Button component={Link} to="/" variant="contained" color="primary" className={classes.button}>
                Go to Home
            </Button>
        </div>
    );
};

export default PageNotFound;
