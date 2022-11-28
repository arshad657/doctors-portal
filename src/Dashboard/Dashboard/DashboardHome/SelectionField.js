import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';

function SelectionField({appointment, loadChecked}) {
  const [checked, setChecked] = React.useState(loadChecked);
  // setChecked(loadChecked)
    

    
    

  const handleChange = (event) => {
    
    

      if(!checked == true){
        if (window.confirm("Do you want to change the status?") == true) {
          setChecked(event.target.checked);
        const id = appointment._id
        fetch(`http://localhost:5000/user/admin/${id}`, {
          method: 'PUT',
          
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }
      
    } 
    
  };

  return (
    <div>
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    
    </div>
  );
}

export default SelectionField