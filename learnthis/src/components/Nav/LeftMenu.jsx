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
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import SchoolIcon from '@mui/icons-material/School';

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
    zlog('action','Button title clicked:',event);
    zlog('action','Button index clicked:', index);
  
    if(index ===0) {
      setSelectedIndex(false)
    }
    if(index === 0) {
      props.handleNewResourceOpen()
    } else if (index === 1) {
      console.log("My Resources has been triggered")
    }
  };
  
  // TODO - this needs a better system - use main list, but when divider, use something like divider|texthere & split it out
  const divlist = ["","my items:","","","","my ratings:","","","my lessons:","","","","other:"];

  // deal with toggling clicked items on or off
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
          {['Add Resource',
            'divider',
            'My Resources', 
            'My Favorites', 
            'My Playlist',
            'divider',
            'My Rated < 3',
            'My Rated > 3',
            'divider',
            'My Beginner', 
            'My Intermediate',
            'My Advanced',
            'divider',
            'Reported',
            'Deleted'].map((text, index) => (
            <div key={index}>
            {text === 'divider' ? (<Divider key={index} textAlign="left" variant = "middle">{divlist[index]}</Divider>) : (
            <ListItem key={text} disablePadding 
                onClick={() => handleClick(text, index)}
                style={index === selectedIndex ? { backgroundColor: theme.palette.warning.main, color: theme.palette.warning.contrastText } : {}}
                >
              <ListItemButton
                key={index}
                selected={selectedIndex === index}
                onClick={(event) => { handleListItemClick(event, index);}}
              >
                <ListItemIcon key={index}>
                  {index === 0 ? <AddCircleIcon/> : <span/>}
                  {text === 'My Resources' ? <HomeIcon/> : <span/>}
                  {text === 'My Favorites' ? <FavoriteIcon/> : <span />}
                  {text === 'My Rated < 3' ? <StarHalfIcon/> : <span />}
                  {text === 'My Rated > 3' ? <StarIcon/> : <span />}
                  {text === 'My Playlist' ? <ListIcon/> : <span/>}
                  {text === 'Reported' ? <ReportIcon/> : <span/>}
                  {text === 'Deleted' ? <DeleteIcon/> : <span/>}
                  {text === 'My Intermediate' ? <SchoolIcon/> : <span/>}
                  {text === 'My Beginner' ? <SchoolIcon/> : <span/>}
                  {text === 'My Advanced' ? <SchoolIcon/> : <span/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
            )}
            </div>
          ))}
        </List>
        <Divider />
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


/*
theme.palette. (etc)
primary.main: the main primary color of the theme
primary.light: a lighter version of the primary color
primary.dark: a darker version of the primary color
primary.contrastText: the color to use for text placed on top of the primary color
secondary.main: the main secondary color of the theme
secondary.light: a lighter version of the secondary color
secondary.dark: a darker version of the secondary color
secondary.contrastText: the color to use for text placed on top of the secondary color
error.main: the main error color of the theme
error.light: a lighter version of the error color
error.dark: a darker version of the error color
error.contrastText: the color to use for text placed on top of the error color
warning.main: the main warning color of the theme
warning.light: a lighter version of the warning color
warning.dark: a darker version of the warning color
warning.contrastText: the color to use for text placed on top of the warning color
info.main: the main info color of the theme
info.light: a lighter version of the info color
info.dark: a darker version of the info color
info.contrastText: the color to use for text placed on top of the info color
success.main: the main success color of the theme
success.light: a lighter version of the success color
success.dark: a darker version of the success color
success.contrastText: the color to use for text placed on top of the success color
*/