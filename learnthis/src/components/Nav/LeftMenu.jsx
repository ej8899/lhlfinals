import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import zlog from '../../helpers/zlog';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft(props) {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(props.open);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // --------------------------------------------------------
  // Import Hooks
  // const { handleNewResourceOpen, setNewResource } = StateStatus();

  const handleClick = (event, index) => {
    zlog('action','Button was clicked:',event);
    zlog('action','Button was clicked:', index);
  
    if(index === 0) {
      props.handleNewResourceOpen()
    } else if (index === 1) {
      console.log("My Resources has been triggered")
    }
  };
  


  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
          {['Add Resource', 'My Resources', 'Favorites', 'Saved for Later', 'Playlist'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => handleClick(text, index)}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <AddCircleIcon/> : <span/>}
                  {index === 1 ? <HomeIcon/> : <span/>}
                  {index === 2 ? <FavoriteIcon/> : <span/>}
                  {index === 3 ? <BookmarkIcon/> : <span/>}
                  {index === 4 ? <ListIcon/> : <span/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Reported', 'Deleted',].map((text, index) => (
            <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <ReportIcon/> : <span/>}
                  {index === 1 ? <DeleteIcon/> : <span/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        </Box>
  )

  return (
    <SwipeableDrawer
      anchor={props.anchor}
      open={props.state[props.anchor]}
      onClose={props.toggleDrawer(props.anchor, false)}
      onOpen={props.toggleDrawer(props.anchor, true)}
    >

        {/* sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={props.open}
        onClose={props.close}
      > */}
      <DrawerHeader>
        <IconButton onClick={props.toggleDrawer(props.anchor, false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {list(props.anchor)}
    </SwipeableDrawer>
  );
}
