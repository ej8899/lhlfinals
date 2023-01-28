import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import PhpIcon from '@mui/icons-material/Php';
import VpnLockIcon from '@mui/icons-material/VpnLock';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  // TODO this should ultimately come from database - not hard coded
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'All' },
    { key: 9, label: 'Recent' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'C++' },
    { key: 6, label: 'HTML' },
    { key: 7, label: 'CSS' },
    { key: 8, label: 'CyberSecurity' },
    { key: 10, label: 'JavaScript' },
    { key: 11, label: 'PHP' },
    { key: 12, label: 'SQL' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const handleClick = (chipID) => {
    console.info('You clicked the Chip.',chipID);
  };

  // TODO - could we add an overflow to scroll the chip list left and right?
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
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
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onClick={()=> {handleClick(data.key)}}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}