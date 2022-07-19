import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../images/chair.png';
import bg from '../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { height } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


function Banner() {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item style={{...verticalCenter, textAlign: 'left'}} xs={12} md={6}>
                <Box>
                <Typography variant='h3'>
                    Your New Smile <br />
                    Starts Here
                </Typography>
                <Typography variant='h6' sx={{my: 4, fontSize: 14, color: 'gray', fontWeight: 300, width: '500px'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam impedit consequatur suscipit illum amet soluta cumque. Laboriosam, qui eaque?
                </Typography>
                <Button variant='contained' style={{backgroundColor: '#5CE7ED'}}>Get Appointment</Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} style={ verticalCenter}>
                <img src={chair} alt="" style={{width: '400px', textAlign: 'center'}} />
            </Grid>
      
        </Grid>
  </Container>
  )
}

export default Banner