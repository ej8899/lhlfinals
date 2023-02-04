import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import PhpIcon from '@mui/icons-material/Php';
import VpnLockIcon from '@mui/icons-material/VpnLock';


import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import zlog from "../../helpers/zlog.js";

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

// TODO props.catList
export default function ChipsArray(props) {

  let object = {};
  let objectArray = [
    {key: 0, label: 'All'},
    {key: 1, label: 'New'},
  ];
  for (let i = 1; i < props.catList.length; i++) {
    object = {
      key: i + 1,
      label: props.catList[i]
    };
    objectArray.push(object);
  }
  const [chipData, setChipData] = React.useState(objectArray);
  
  // // TODO this should ultimately come from database - not hard coded
  // // TODO - these can be "top" categories - 'most active' or randomized?
  // const [chipData, setChipData] = React.useState([
  //   { key: 0, label: 'All' },
  //   { key: 9, label: 'Recent' },
  //   { key: 1, label: 'jQuery' },
  //   { key: 2, label: 'Svelte' },
  //   { key: 3, label: 'React' },
  //   { key: 4, label: 'Vue.js' },
  //   { key: 5, label: 'C++' },
  //   { key: 6, label: 'HTML' },
  //   { key: 7, label: 'CSS' },
  //   { key: 8, label: 'CyberSecurity' },
  //   { key: 10, label: 'JavaScript' },
  //   { key: 11, label: 'PHP' },
  //   { key: 12, label: 'SQL' },
  // ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleClick = (chipID) => {
    zlog('action',"chip clicked:",chipID)
  };

  // TODO - could we add an overflow to scroll the chip list left and right?
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
      component="ul"
    >
      <Tabs
          variant="scrollable"
          value={false}
          scrollButtons="auto"
          aria-label="select a search filter"
          >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }
        if (data.label === 'JavaScript') {
          icon = <JavascriptIcon />;
        }
        if (data.label === 'CSS') {
          icon = <CssIcon />;
        }
        if (data.label === 'PHP') {
          icon = <PhpIcon />;
        }
        if (data.label === 'CyberSecurity') {
          icon = <VpnLockIcon/>;
        }

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
              icon={icon}
              label={data.label}
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