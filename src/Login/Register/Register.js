import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import login from '../../images/login.png'
import { Button, Container, Grid,  TextField, Typography } from '@mui/material'


function Register() {
  const [loginData, setLoginData] =useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target. value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData)
        console.log(newLoginData)
    }
    const handleSubmit = (e) => {
      if(loginData.password != loginData.password2){
        alert('Your password did not match')

      }
        e.preventDefault()
    }

  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{mt: 8}}>
                <Typography variant='body1' gutterBottom>Register</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    name='email'
                    type='email'
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
                    <TextField
                    sx={{width: '75%', m: 1}}
                    id='standard-basic'
                    label='Re-type Your Password'
                    name='password2'
                    onChange={handleOnChange}
                    type='password'
                    variant='standard' />
                    <Button variant='contained' type='submit' sx={{width: '75%', m: 1}}> Register</Button>

                    <Link to='/login' style={{textDecoration: 'none'}}>
                    <Button variant='text'>Already Registered? Please Login</Button>
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

export default Register