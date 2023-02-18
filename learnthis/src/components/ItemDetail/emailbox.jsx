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
      {(!props.errorBlank && !props.errorEmail) &&
        <Box display="flex" sx={{marginBottom: "1.5em"}} alignItems="flex-end">
          <AccountCircle sx={{ color: "action.active", mr: 1, marginBottom: 0.5}} />
          <TextField sx={{width: props.width}}
            id={props.label} 
            label={props.label}
            variant="standard" 
            value={props.emailTo}
            onChange={(event) => props.emailMyTo(event.target.value)}
          />
        </Box>
      }
      { props.errorBlank &&
        <Box display="flex" alignItems="center">
          <AccountCircle sx={{ color: "action.active", mr: 1, marginBottom: 1}} />
          <TextField sx={{width: props.width}}
            error
            id={props.label} 
            label={props.label}
            variant="standard" 
            value={props.emailTo}
            onChange={(event) => props.emailMyTo(event.target.value)}
            helperText="Email address cannot be blank."
          />
        </Box>
      }
      { props.errorEmail &&
        <Box display="flex" alignItems="center">
          <AccountCircle sx={{ color: "action.active", mr: 1, marginBottom: 1}} />
          <TextField sx={{width: props.width}}
            error
            id={props.label} 
            label={props.label}
            variant="standard" 
            value={props.emailTo}
            onChange={(event) => props.emailMyTo(event.target.value)}
            helperText="Provide valid email address."
          />
        </Box>
      }
    </Box>
  );
}