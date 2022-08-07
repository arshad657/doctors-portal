import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import pic from '../../images/treatment.png'

function ExceptionalCare() {
  return (
    <Container sx={{marginTop: '50px'}}>
    <Grid container spacing={2} >
            <Grid item xs={12} md={6} >
                <img src={pic} alt="" style={{maxWidth:'60%'}} />
            </Grid>
            <Grid item  xs={12} md={6} sx={{textAlign:'left', my:'auto' }}>
                <Box>
                    <Typography variant='h4' sx={{mb: 5, fontWeight: 400}}>
                        Exceptional Dental <br /> Care, on Your Terms
                    </Typography>
                    <Typography variant='caption' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore obcaecati consequuntur quidem magni cum officia quaerat ipsum rem excepturi in praesentium amet ipsam, labore, quo ex atque! Distinctio sunt aperiam nobis, facilis eum rem dolor pariatur eligendi voluptas quis nisi tempore sequi culpa et reprehenderit, consequatur, earum explicabo rerum vitae?
                    </Typography>
                    
                </Box>
                <Button variant='contained' sx={{mt:5, backgroundColor:'#118494'}}>Learn More</Button>
            </Grid>
      
        </Grid>
        </Container>
  )
}

export default ExceptionalCare