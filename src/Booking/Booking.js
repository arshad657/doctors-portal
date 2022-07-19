import { Grid } from '@mui/material'
import React from 'react'

function Booking({booking}) {
    const {name, time, space} = booking;
  return (
    <Grid item xs={12} sm={6} md={4}>
        <h2> {name}</h2>
    </Grid>
  )
}

export default Booking