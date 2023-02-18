import * as React from 'react';

import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import RandomAvatar from './RandomAvatar';
import { useEffect } from 'react';
import Link from '@mui/material/Link';

export default function UserNotifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const sampledata = randomizer();

  return (
  <div>
    
      <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleClick}
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
      </IconButton>

  
      <Popper id={id} open={open} anchorEl={anchorEl} disablePortal sx={{zIndex: 200}}>
      <Box sx={{ p:5, border: 1, borderRadius: 5, p: 1, bgcolor: 'background.paper', position: 'relative', zIndex: 999999}} >
      <Box sx={{ p:5, m:1, ml:3, mr:2, border: 0, borderRadius: 5, p: 1, bgcolor: 'background.paper', zIndex: 1300}} >
      <ul>
      {sampledata.map((item, index) => (
        <div key={index} style={{paddingTop:'5px',paddingBottom:'5px'}}><li style={{display:'flex', alignItems: 'center'}} sx={{p:15, m:15}} key={index}>
        <img src={`${item.url}`}
        alt={item.name}
        style={{width:24, height:24,}}
        />&nbsp;&nbsp;
        <Link href="#">{item.name} - {item.action}</Link></li>
      <Divider /></div>
      ))}
      </ul>
      
      <br/>
      <Button variant="contained">clear notifications</Button>
      </Box>
      </Box>

    </Popper>
    </div>
  );
}


function randomizer() {
  let names = [
    "Sarah",
    "Michael",
    "Jessica",
    "David",
    "John",
    "Karen",
    "James",
    "Emily",
    "Robert",
    "Elizabeth",
    "Daniel",
    "Lauren",
    "Christopher",
    "Megan",
    "Andrew",
    "Rachel",
    "Thomas"
  ];
  
  let actions = [
    "shared your resource",
    "liked your resource",
    "rated your resource",
    "favorited your resource",
    "re-ranked your resource",
    "added to a lesson plan",
    "reported your resource"
  ];
  
  let result = [];
  
  for (let i = 0; i < names.length; i++) {
    let x = (Math.random())
    let url = "https://api.dicebear.com/5.x/bottts-neutral/svg?radius=50&seed=" + x;

    let randomIndex = Math.floor(Math.random() * actions.length);
    result.push({ url: `${url}`, 
                  name: `${names[i]}`,
                  action: `${actions[randomIndex]}`});
  }
  
  return result;
}