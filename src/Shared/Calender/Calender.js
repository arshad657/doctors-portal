import { TextField } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react'

function Calender({date, setDate}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} style={{width: '1000px'}}>
                <StaticDatePicker
                    displayStaticWrapperAs='desktop'
                    value={date}
                    
                    onChange={(newValue) => {
                    setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider>
  )
}

export default Calender