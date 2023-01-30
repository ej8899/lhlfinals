import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(props) {

  const listing = [];
  props.listData.forEach((element, index) => {
    listing.push(element)
  });

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={listing}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.message} />}
      value={props.mySelection}
      onChange={(event, value) => props.addMySelection(value)}
    />
  );
}
