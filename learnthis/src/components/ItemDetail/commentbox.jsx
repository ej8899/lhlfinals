import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields(props) {
  return (
    <Box display={props.display} alignItems="flex-start"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: props.margin, width: props.width, marginBottom: props.botMargin},
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
        />
      </div>
    </Box>
  );
}