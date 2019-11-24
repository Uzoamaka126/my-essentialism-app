import React from 'react';
import { Link, Route} from "react-router-dom";

import formImg from '../../assets/form-img.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';


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

  
export default function Signup() {
    const classes = useStyles();

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
                    <h1>Sign up here to get started!</h1>
                    <div className="form-group">
                        <label>Full Name</label> 
                        <input />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label> 
                        <input />
                    </div>
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
                    <p>Have an account? 
                        <Link to="/login">Login here</Link>
                    </p>
                </form>
                <div className="form-img">
                    <img className="bg-img" src={formImg} />
                </div>
            </div>
        </div>
    )
}