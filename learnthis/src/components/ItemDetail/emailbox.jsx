import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useSlotProps } from '@mui/base';

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