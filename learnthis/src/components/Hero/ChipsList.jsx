import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import PhpIcon from '@mui/icons-material/Php';
import VpnLockIcon from '@mui/icons-material/VpnLock';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UnpublishedIcon from '@mui/icons-material/Unpublished';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import zlog from "../../helpers/zlog.js";
import { useEffect } from 'react';


const useStyles = {
  boundary: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "nowrap",
    listStyle: "none",
    margin: 0,
    overflow: "auto",
    maxWidth: "400px"
  },
  tab: {
    opacity: 1,
    minWidth: "0px",
    padding: 0
  },
  chip: {
  }
};

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));


export default function ChipsArray(props) {

  let object = {};
  let objectArray = [
  ];
  for (let i = 0; i < props.catList.length; i++) {
    object = {
      key: i,
      label: props.catList[i]
    };
    objectArray.push(object);
  }
  const [chipData, setChipData] = React.useState(objectArray);
  const [filled, setFilled] = React.useState(false);

  useEffect(() => {
    const tagInit= {};
    for (let i = 0; i < objectArray.length+1; i++) {
      tagInit[i] = true;
    }  
    setFilled({...tagInit})
    console.log("filled",filled)
  }, []);
  
  

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleClick = (chipID) => {
    zlog('action',"chip clicked:",chipID)
    if(chipID === 100) {
        console.log('is on, turn off')
        const tagInit= {};
        for (let i = 0; i < objectArray.length; i++) {
          tagInit[i] = true;
        }  
        setFilled({...tagInit})
    } 
    else if(chipID === 200) {
        console.log('is off, turn on')
        const tagInit= {};
        for (let i = 0; i < objectArray.length; i++) {
          tagInit[i] = false;
        }  
        setFilled({...tagInit})  
      }
    else {
      setFilled({...filled, [chipID]: !filled[chipID]});
    }
  };

  
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'nowrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
        overflow: "auto",
      }}
      component="ul">
      
      <Tabs
          variant="scrollable"
          value={false}
          scrollButtons="auto"
          aria-label="select a search filter"
          >
            <Tab    
              disableRipple
              key="100"
              sx={{
                    minWidth: "0px",
                    margin: "2px",
                    padding: "1px"
                  }}
              label={
            <Chip
              color="warning"
              label="all"
              icon={<CheckCircleIcon />}
              variant="default"
              sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px"
                  }}
              onClick={()=> {handleClick(100)}}
            />}/>
            <Tab
              disableRipple
              key="200"
              sx={{
                    margin: "2px",
                    padding: "1px",
                    minWidth: "0px",
                  }}
              label={
            <Chip
              color="warning"
              label="none"
              icon={<UnpublishedIcon />}
              variant="default"
              sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px"
                  }}
              onClick={()=> {handleClick(200)}}
            />}/>
      {chipData.map((data) => {

        return (
          
          <Tab
              disableRipple
              key={data.key}
              sx={{minWidth: "0px",
                    margin: "2px",
                    padding: "1px"
                  }}
              label={
            <Chip
              color="success"
              label={data.label}
              variant={filled[data.key] ? "default" : "outlined"}
              sx={{ textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "5px"
                  }}
              onClick={()=> {handleClick(data.key)}}
            />}/>
        );
        
      })}
      </Tabs>
    </Paper>
  );
}