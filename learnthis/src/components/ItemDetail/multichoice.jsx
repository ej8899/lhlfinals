import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags(props) {

  const listing = [];
  props.listData.forEach((element, index) => {
    listing.push(element)
  });

  const type = props.type

  return (
    <Stack spacing={3} sx={{ width: 300 }}>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={listing}
        filterSelectedOptions
        readOnly={props.readOnly}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.message}
          /> )}
          value={props.mySelection}
          onChange={(event, value) => props.addMySelection(value)}
      />
    </Stack>
  );
}

