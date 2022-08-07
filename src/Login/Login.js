import { Alert, Button, CircularProgress, Container, Grid,  TextField, Typography } from '@mui/material'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import React, {useState} from 'react'
import login from '../images/login.png'
import useAuth from '../Hooks/useAuth'
import googlePic from '../images/googlePic.png'

function Login() {
    const [loginData, setLoginData] =useState({})
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth()
    const location = useLocation()
    
    const navigate = useNavigate()


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target. value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
        
    }
    const handleSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleGoogleSignIn =() => {
        signInWithGoogle(location, navigate)
    }
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant='h5' gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                    onFocus={{color:'black'}}
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    name='email'
                    onBlur={handleOnChange}
                    label='Your Email'
                    variant='standard' />
                    <TextField
                    onFocus={{color:'black'}}
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    label='Your Password'
                    name='password'
                    onBlur={handleOnChange}
                    type='password'
                    variant='standard' />
                    <Button variant='contained' type='submit' sx={{width: '75%', m: 1, backgroundColor:'#118494'}}> Login</Button>

                    <Link to='/register' style={{textDecoration: 'none'}}>
                    <Button variant='text' sx={{color:'#118494'}}>New User? Please Register</Button>
                    </Link> 
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity='success'>User logged in successfully</Alert>}
                    {authError && <Alert severity='error'>{authError}</Alert>}
                </form>
                
                <Button onClick={handleGoogleSignIn} variant='outlined' sx={{color:'black'}}><img src={googlePic} style={{width:'20px', marginRight:'10px'}} /> Sign In with Google</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={login} alt="" style={{width: '100%'}}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Login