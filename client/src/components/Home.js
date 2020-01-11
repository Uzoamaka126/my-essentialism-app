import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Import assets
import BgImg from '../assets/bg-img-1.svg';
// Import Components
import Navbar from '../components/navigation/Navbar'
import SignUp from './auth/Signup';
import * as actions from '../redux-store/actions/actionCreators';

// Import Components from MaterialUI
import {  makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';

// helper function
import { withAthCheck } from '../_helpers/authenticationChecker';
import PrivateRoute from './auth/ProtectedRoute';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        height: '100%'
    },
    button: {
        backgroundColor: '#6C63FF',
        color: '#FFF',
        padding: '14px 16px'
    }
}))

export  function Home(props) {
    const classes = useStyles();

    const onLogout =() => {
        localStorage.clear();
        props.history.replace('/');
    };

    return (
        <Box>
            <Navbar />
            <Grid xs={12} sm={12} md={12} lg={12} container direction="row" justify="space-between" alignItems="center" >
            <Paper className={classes.paper}>
                <div className="first-column">
                    <h1>Want to achieve your goals?</h1>
                    <p>There is so much noise in the world today</p>
                    <Button variant="contained" className={classes.button} href="#contained-buttons">Get Started</Button>
                </div>
                <div className="second-column">
                    <img className="bg-img" src={BgImg} />
                </div>
            </Paper>
            
            </Grid>
            
      </Box>
    )
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps, actions)(Home);