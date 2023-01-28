import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields(props) {
  return (
    <Box display={props.display} alignItems="flex-start"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="My Comments"
          multiline
          rows={15}
          placeholder="Make your notes here."
        />
      </div>
    </Box>
  );
}