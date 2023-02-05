// --------------------------------------------------------
// React Imports
import { useState } from 'react'
import * as React from 'react';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports
import { Button, Snackbar } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MuiAlert from '@mui/material/Alert';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
// --------------------------------------------------------

const CopyToClipboardButton = (props) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
    navigator.clipboard.writeText(`${window.location.toString()}ref/:${props.id}`)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  return (
    <>
      <Tooltip title="Copy Link to Clipboard">
        <ContentCopyRoundedIcon onClick={handleClick} sx={{fontSize:"xl", "&:hover": {color: 'green', cursor: "pointer"}}} style={{verticalAlign:"bottom"}} />
      </Tooltip>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Copied to Clipboard
        </Alert>
      </Snackbar>
    
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
      {/* </Stack> */}
    </>
  )
}

export default CopyToClipboardButton