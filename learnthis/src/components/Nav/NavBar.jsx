import * as React from 'react';
import {useState, useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import zlog from '../../helpers/zlog';
import Login from '../Signin.jsx';
import SignUp from '../SignUp.jsx';
import PersistentDrawerLeft from "./LeftMenu.jsx";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Divider from '@mui/material/Divider';
import RandomAvatar from './RandomAvatar';
import { Paper, Toolbar, Box, Grid } from "@mui/material";

import {  modalSignUp,
          modalSignIn
} from './signinup.jsx';

// userauth
import { AuthContext } from '../../hooks/handleUsers.js';
import { FilterContext } from "../../helpers/filter";

import AboutDialog from "../Modal/about.jsx"
import { useEffect } from 'react';


//
// profile modal
//
function ProfilePageData(url,user) {
  
  
  return (
  <div>
  <Grid sx={{ border: "0px solid red" }} container spacing={2} justifyContent="center" >
  <Grid item 
            align="left"
            
            alignItems="flex-end"
            justify="center" 
            >
    <img
      className="fashadow "
      src={url}
      alt="user avatar"
      width="150"
      height="150"
    />
  </Grid>
  <Grid item xs={8} 
            container
            align="left"
            
            alignItems="flex-end"
            justify="center"
            >
    
  
  <Typography variant="body1">
    This is the user profile modal for {user}<br/>
  </Typography>

  </Grid>
  </Grid>
  </div>
  );
}


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { myFilteredData } = useContext(FilterContext);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = event => {
      setTextInput(event.target.value);
      zlog('info',"SEARCH BAR:",event.target.value)
  };


  // setup avatar
  const [avatarUrl, setAvatarUrl] = React.useState(null);
  React.useEffect(() => {
    let x = (Math.random())
    let url = "https://api.dicebear.com/5.x/bottts-neutral/svg?radius=50&seed=" + x;
    setAvatarUrl(url);
    // console.log(avatarUrl)
  }, []);


  // userauth
  const { isAuth, user, userid, logout } = useContext(AuthContext);
  // zlog("debug","user:",user)
  // zlog("debug","userid:",userid)
  // zlog("debug","isAuth:",isAuth)

  // LOGIN
  const [open, setOpen] = React.useState(false);
  const [dialogTitle, setTitle] = React.useState('empty');
  const [dialogContent, setContent] = React.useState('empty');
  const handleUserModals = (modal) => {
    setAnchorEl(null);
    handleMenuClose();
    zlog('info',"user MODAL:",modal);

    switch (modal) {
      case 'logout':
        logout(props.setsampledata, props.sampledata, props.combinedData, props.clearFilter, props.setClearFilter, props.setLessonTrue, setSelectedIndex);
        break;
      case 'profile':
        setTitle("Profile...")
        setContent(ProfilePageData(avatarUrl,user));
        break;
      default:
        setTitle("oops.. not found");
        break;
    }
    if(open === true) setOpen(false);
    if(open === false) setOpen(true);
  }
  const handleClose = () => setOpen(false);

  function handlelogout() {
    setAnchorEl(null);
    handleMenuClose();
    logout(props.setsampledata, props.sampledata, props.combinedData, props.setClearFilter, props.setLessonTrue, setSelectedIndex);
  }

  // SIGN IN
  const [loginopen, setLOpen] = React.useState(false);
  const handleLoginClose = () => setLOpen(false);
  const handleLoginForm = (event) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    setLOpen(true);
  }
  // SIGN UP
  const [signupopen, setSOpen] = React.useState(false);
  const handleSignUpClose = () => setSOpen(false);
  const handleSignUp = (event) => {
    setAnchorEl(null);
    handleMobileMenuClose();
    setSOpen(true);
  }

  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuth ? <MenuItem avatar={avatarUrl} onClick={() => handleUserModals('profile')}>Profile</MenuItem> : null}
      {isAuth ? null : <MenuItem onClick={handleLoginForm}>Sign In</MenuItem>}
      {isAuth ? null : <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>}
      {isAuth ? <Divider variant="middle"  /> : null}
      {isAuth ? <MenuItem onClick={() => handlelogout()}>Logout</MenuItem> : null}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';


  //
  // menu drawer
  //
  const [dopen, setDOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const handleDrawerOpen = () => {
    setDOpen(true);

  };
  const handleDrawerClose = () => {
    setDOpen(false);
  };

// -----------------------------------------------------
const [state, setState] = React.useState({
  left: false,
});

const anchor = "left"

const toggleDrawer = (anchor, open) => (event) => {
  if (props.clearFilter) {
    setSelectedIndex(null)
    props.setClearFilter(false)
  }

  if (myFilteredData.resource.created_by) {
    setSelectedIndex(4)
  }

  if (
    event &&
    event.type === 'keydown' &&
    (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

// -----------------------------------------------------



  // TODO - get rid of &nbsp; by user logged in name - how to pad the vertical divider?

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Login 
        open={loginopen} close={handleLoginClose}
        setsampledata={props.setsampledata} sampledata={props.sampledata}
        combinedData={props.combinedData}
        clearFilter={props.clearFilter} setClearFilter={props.setClearFilter}
      ></Login>
      <SignUp 
        open={signupopen} close={handleSignUpClose}
        setsampledata={props.setsampledata} sampledata={props.sampledata}
        combinedData={props.combinedData}
        clearFilter={props.clearFilter} setClearFilter={props.setClearFilter}
      ></SignUp>
      <AppBar position="static">
        <Toolbar>
          {!isAuth && 
          <IconButton
            disabled
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, ...(dopen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>}
          {isAuth && 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
            sx={{ mr: 2, ...(dopen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>}
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            LearnThis!
          </Typography>
          <Search value= {textInput}
            onChange= {handleTextInputChange}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ alignItems:"center", display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            
            <IconButton 
              size="large" 
              aria-label="toggle light and dark modes"
              sx={ {m1: 1} } 
              onClick={props.handleDarkMode} 
              color="inherit">
            {props.darkMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <Divider  component="div" orientation="vertical" variant="middle" flexItem sx={{borderBottomWidth: 4}}/>&nbsp;&nbsp;

            <Typography
            variant="h6"
            noWrap
            component="li"
            sx={{ display: { xs: 'none', sm: 'block' } }} >
            
            {isAuth ? user : null}
            </Typography>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {isAuth ? <RandomAvatar url={avatarUrl}/> : <AccountCircle />}
            </IconButton>
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <AboutDialog title={dialogTitle} description={dialogContent} open={open} handleClose={handleClose}></AboutDialog>
      <PersistentDrawerLeft
        state={state} setState={setState} toggleDrawer={toggleDrawer} anchor={anchor}
        handleNewResourceOpen={props.handleNewResourceOpen} setNewResource={props.setNewResource} setsampledata={props.setsampledata} sampledata={props.sampledata} combinedData={props.combinedData} clearFilter={props.clearFilter} setClearFilter={props.setClearFilter} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} setLessonTrue={props.setLessonTrue}
      />
    </Box>
  );
}