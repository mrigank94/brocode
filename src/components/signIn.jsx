import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import loginService from '../service/login.service';
import {toast} from 'react-toastify';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    handleClick = async _ => {
        const {username, password} = this.state;
        let isAuthenticated;
        try {
            isAuthenticated = await loginService.login(username, password);
        } catch (ex) {
            if(isAuthenticated === false) {
                toast('User is not authorized. Please sign up');
            }
            return;
        }

        if(isAuthenticated) {
            localStorage.setItem('isAuthenticated', 'true');
            this.props.history.push({
                pathname: '/home'
            });
        }
    };

    handleTextChange = (event, type) => {
        if (type === 'email') {
            const email = event.target.value;
            this.setState({username: email});
        } else if (type === 'password') {
            const password = event.target.value;
            this.setState({password});
        }
    };


    render() {

        const paper = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        };

        const form = {
            width: '100%', // Fix IE 11 issue.
        };

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={paper}>
                    <Avatar>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <div className={form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(event) => this.handleTextChange(event, 'email')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(event) => this.handleTextChange(event, 'password')}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleClick}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to={'/signup'} variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default SignIn;