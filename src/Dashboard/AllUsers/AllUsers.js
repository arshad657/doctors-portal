import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'

function AllUsers() {
  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    const url = 'http://localhost:5000/allusers'
    fetch(url)
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  
  
  return (
    <div>Total Users: {users.length}
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            
            <TableCell >Email</TableCell>
            <TableCell >Role</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.displayName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.displayName}
              </TableCell>
              <TableCell >{user.email}</TableCell>
              <TableCell >{user.role}</TableCell>
              
              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  )
}

export default AllUsers