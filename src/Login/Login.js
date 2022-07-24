import { Button, Container, Grid,  TextField, Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import login from '../images/login.png'

function Login() {
    const [loginData, setLoginData] =useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target. value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(field, value)
    }
    const handleSubmit = (e) => {
        alert('hello')
        e.preventDefault()
    }
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant='body1' gutterBottom>Login</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    name='email'
                    onChange={handleOnChange}
                    label='Your Email'
                    variant='standard' />
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    label='Your Password'
                    name='password'
                    onChange={handleOnChange}
                    type='password'
                    variant='standard' />
                    <Button variant='contained' type='submit' sx={{width: '75%', m: 1}}> Login</Button>

                    <Link to='/register' style={{textDecoration: 'none'}}>
                    <Button variant='text'>New User? Please Register</Button>
                    </Link> 
                </form>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={login} alt="" style={{width: '100%'}}/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Login