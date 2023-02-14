import React from 'react';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';


const useStyles = {
  root: {
    '& > *': {
    },
  },
};

export default function ShareTwitterButton(props) {

  return (
    <div className={useStyles.root}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<TwitterIcon />}
        style={props.style}
        onClick={() => {
          window.open('https://twitter.com/intent/tweet?text=Hello%20from%20Material-UI&via=MaterialUI', '_blank');
        }}
      >
        Share on Twitter
      </Button>
    </div>
  );
}
