import {  Alert, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Footer from '../../Shared/Footer/Footer'
import Booking from '../Booking/Booking'


const bookings= [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        status: 'Pending'
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
        status: 'Pending'
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
        status: 'Pending'
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 AM',
        space: 5,
        status: 'Pending'
    },
    {
        id: 5,
        name: 'Pediactric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 10,
        status: 'Pending'
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 10,
        status: 'Pending'
    },
]

function AvailableAppointments({date}) {
    const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <>
    <Container >
    <Typography variant='h4' sx={{color: '#046875', mb: 5, fontWeight: 500}}>AvailableAppointments {date.toDateString()}</Typography>
    {bookingSuccess && <Alert severity='success'>Appointment booked successfully!</Alert>}
    <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking
                    setBookingSuccess={setBookingSuccess} 
                    date={date}
                    key={booking.id }
                    booking={booking}

                    />)
            }
        
    </Grid>

    
    </Container>
    <Footer />
    </>
  )
}

export default AvailableAppointments