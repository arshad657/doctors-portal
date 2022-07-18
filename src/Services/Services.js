import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Home/Service/Service';
import Fluride from '../images/fluoride.png'


const services = [
    {
        name: 'florida',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
},
    {
        name: 'florida',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
},
    {
        name: 'florida',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
},
    {
        name: 'florida',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ab expedita tempore eligendi sunt ratione mollitia dolore et deleniti. Blanditiis?',
        img: Fluride, 
}

]
function Services() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
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