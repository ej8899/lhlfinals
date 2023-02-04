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
import AccountCircle from '@mui/icons-material/AccountCircle';
// --------------------------------------------------------

export default function InputWithIcon(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end", m: props.margin, marginBottom: props.botMargin}}>
      <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField sx={{width: props.width}}
        id={props.label} 
        label={props.label}
        variant="standard" 
        value={props.emailTo}
        onChange={(event) => props.emailMyTo(event.target.value)}
      />
    </Box>
  );
}