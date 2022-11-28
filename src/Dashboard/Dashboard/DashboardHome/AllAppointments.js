import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper';
import React, { useState } from 'react'
import { useEffect } from 'react'
import useAuth from '../../../Hooks/useAuth'
import SelectionField from './SelectionField';

function AllAppointments() {
    const {user} = useAuth()
    const [appointments, setAppointments] = useState([])
    // const [loadChecked, setLoadChecked] = useState()

    useEffect(() => {
        getAppointments()
      },[])

    const getAppointments =() => {
        const url = 'http://localhost:5000/allappointments'
        fetch(url)
        .then(res => res.json())
        .then(data =>setAppointments(data))
      }

      
  return (
    <>
    <div>Total Appointments: {appointments.length}</div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell >Email</TableCell>

            <TableCell >Service </TableCell>
            <TableCell >Date </TableCell>
            <TableCell >Scheduled</TableCell>
            <TableCell >Completed?</TableCell>
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
              <TableCell >{appointment.email}</TableCell>
              <TableCell >{appointment.serviceName}</TableCell>
              <TableCell >{appointment.date}</TableCell>
              <TableCell >{appointment.time}</TableCell>
              
              {appointment.status === 'completed'
                ?  <TableCell><SelectionField appointment={appointment} loadChecked={true}/></TableCell>
                :  <TableCell><SelectionField appointment={appointment} loadChecked={false}/></TableCell>
                
              }

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</>
  )
}

export default AllAppointments