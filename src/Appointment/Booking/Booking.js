import { Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import BookingModals from '../BookingModals/BookingModals';

function Booking({booking, date, setBookingSuccess}) {
    const {name, time, space} = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        <Typography variant='h5' sx={{color: 'info.main', fontWeight: 600}} gutterBottom component={'div'}>{name}</Typography>
        <Typography variant='h6' gutter component={'div'}>{time}</Typography>
        <Typography variant='caption' display={'block'} gutterBottom>{space} Spaces Availabe</Typography>
        <Button onClick={handleOpen} variant='contained' sx={{mb: 3}}>BOOK APPOINTMENT</Button>
      </Paper>
        
    </Grid>
    <BookingModals
    setBookingSuccess = {setBookingSuccess} 
    date={date}
    booking={booking}
    open={open} 
    handleClose={handleClose}/>
    </>
    
  )
}

export default Booking