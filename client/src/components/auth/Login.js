import React, { useRef } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link, Route} from "react-router-dom";

import formImg from '../../assets/form-img.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import * as actionCreators from '../../redux-store/actions/actionCreators';


const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      backgroundColor: '#6C63FF',
      color: '#fff'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function Login(props) {
    const classes = useStyles();

    // Get the value of the form inputs
    const usernameRef = useRef();
    const passwordRef = useRef();

    const submitLogin = (e) => {
        e.preventDefault()
        axios
        .post("https://my-essentialism-app.herokuapp.com/api/auth/login", {
            username: usernameRef.current.value,
            password: passwordRef.current.value,    
        })
        .then(res => {
            localStorage.setItem("token", res.data.token);
            props.history.push('/dashboard');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <nav className="auth-nav">
                <div className="left-nav">
                    <span className="red c-white">
                        Essentialism
                    </span>
                </div>
            </nav>
            <div className="form-wrapper">
                <form>
                    <h1>Login Here!</h1>
                    <div className="form-group">
                        <label>Username</label> 
                        <input />
                    </div>
                    <div className="form-group">
                        <label>Password</label> 
                        <input />
                    </div>
                    <div className="form-group">
                        <Button variant="contained" size="large" className={classes.margin}>
                            Sign Up
                        </Button>
                    </div>
                    <p>Don't have an account?  
                        <Link to="/signup"> Signup here</Link>
                    </p>
                </form>
                <div className="form-img">
                    <img className="bg-img" src={formImg} />
                </div>
            </div>
        </div>
    )
}