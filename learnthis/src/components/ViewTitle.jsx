import React, { useEffect, useRef, useState, useContext } from "react";

import { AuthContext } from '../hooks/handleUsers.js';

// MUI imports
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


/*
BREADCRUMB usage:

import { AuthContext } from '../../hooks/handleUsers.js';
import { useContext } from 'react';

INSIDE THE FUNCTION:
const { viewTitle, setViewTitle, } = useContext(AuthContext);

CHANGE: 
setViewTitle("new breadcrumb");
*/



function ViewTitle(props) {
  const { viewTitle, setViewTitle, } = useContext(AuthContext);

  return (

    <Box sx={{ border: "red", borderWidth: 0, borderStyle: "solid", }} display="flex" justifyContent="center" alignItems="center">
    <Typography sx={{ border: "yellow", borderWidth: 0, borderStyle: "solid", width: 1400, pl: 1.2}}>
    {viewTitle}...
    </Typography>
    </Box>
    
  );
};
export default ViewTitle;