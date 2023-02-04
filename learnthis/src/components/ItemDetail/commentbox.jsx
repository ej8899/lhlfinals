// --------------------------------------------------------
// React Imports
import * as React from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
// --------------------------------------------------------

export default function MultilineTextFields(props) {
  return (
    <Box display={props.display} alignItems="flex-start"
      component="form"
      sx={{
        '& .MuiTextField-root': { ml: props.marginLeft, width: props.width, marginBottom: props.botMargin},
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label={props.label}
          multiline
          rows={props.rows}
          placeholder={props.placeholder}
          value={props.myComments}
          onChange={(event) => props.addMyComments(event.target.value)}
          disabled={props.disabled}
        />
      </div>
    </Box>
  );
}