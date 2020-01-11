import React, { useRef, useEffect, useState } from 'react';
import { Link, Route} from "react-router-dom";
import { connect } from 'react-redux'

import formImg from '../../assets/form-img.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';

import * as actionCreators from '../../redux-store/actions/actionCreators';
import { withAuth } from '../../_helpers/axiosHelper';
import Axios from 'axios';

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

export function Signup(props) {
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
        error: false
    });    
    const [inputError, setInputError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();

    function inputChange(event) {
        setFormState([event.target.name]: event.target.value)
    }
    
    function submit(e) {
        e.preventDefault();
        const { username, email, password } = formState;
        // let newUser = {};

        if(username !== "" && email !== "" && password !== "") {
            const newUser = { 
                username,
                email,
                password
            };
           Axios.post("https://my-essentialism-app.herokuapp.com/api/auth/register", newUser)
            .then(res => {
                console.log(res)
                const token = localStorage.setItem('token', res.data.token)
                console.log(token);
                props.history.push('/dashboard')
            })
            .catch(err => {
                // setInputError(err);
                setIsLoading(true);
            })
        } else {
            console.log('lll')
            console.log(username, email, password);
            setInputError("Please fill all required fields");
            // setIsLoading(true);
        }
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
                   {inputError ? <div>{inputError.message}</div> : null}
                    <h1>Sign up here to get started!</h1>
                    <div className="form-group">
                        <label>Username {inputChange}</label> 
                        {/* <input name="username" type="text" ref={usernameRef} /> */}
                        <input name="username" type="text" onChange={inputChange} />

                    </div>
                    <div className="form-group">
                        <label>Email Address{inputChange}</label> 
                        {/* <input name="email" type="email" ref={emailRef} /> */}
                        <input name="email" type="email" onChange={inputChange} />

                    </div>
                    <div className="form-group">
                        <label>Password{inputChange}</label> 
                        {/* <input name="password" type="password" ref={passwordRef} /> */}
                        <input name="password" type="password" onChange={inputChange} />
                    </div>
                    <div className="form-group">
                        <Button onClick={submit} variant="contained" size="large" className={classes.margin}>
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

export default connect(state => state, actionCreators)(Signup);