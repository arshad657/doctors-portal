import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Service from '../Home/Service/Service';
import Fluride from '../images/fluoride.png'
import { palette } from '@mui/system';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
},
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
},
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
}

]
function Services() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography variant="h6" sx={{fontWeight: 500, m: 2, color: 'success.main', textAlign:'center'}} component="div">
          OUR SERVICES
        </Typography>
        <Typography variant="h4" sx={{fontWeight: 600, m: 5, textAlign: 'center'}} component="div">
          Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>


        {services.map((service) => (
            <Service 
            key={service.name}
            service={service}
            
            />
          
        ))}
      </Grid>
      </Container>
    </Box>
  )
}

export default Services