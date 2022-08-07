import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../Hooks/useAuth'

function Appointments({date}) {
    const {user} = useAuth()
    const [appointments, setAppointments] = useState([])
    const [appointment] = appointments;
    console.log(user.email)
    useEffect(() => {
        const url = `https://evening-caverns-74385.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`
        fetch(url)
        .then(res => res.json())
        .then(data => 
            
            setAppointments(data))

    },[date])
  return (
    <div>Your Appointments in this date: {appointments.length}
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell align="right">Service </TableCell>
            <TableCell align="right">Scheduled</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment.patientName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="right">{appointment.serviceName}</TableCell>
              <TableCell align="right">{appointment.time}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
    
  )
}

export default Appointments