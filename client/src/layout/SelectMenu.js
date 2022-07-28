import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMenu({choice, setChoice}) {

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, width: 200, marginLeft : "64px"}}>
        <Select
          value={choice}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={{  borderRadius : '12px', height : '32px'}}
        >
          <MenuItem value="insertion">Insertion Sort</MenuItem>
          <MenuItem value="bubble">Bubble Sort</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}
