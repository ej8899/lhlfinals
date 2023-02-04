import * as React from 'react';
import {useState, useContext} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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


import {  modalSignUp,
          modalSignIn
} from './signinup.jsx';

// userauth
import { AuthContext } from '../../hooks/handleUsers.js';


import AboutDialog from "../Modal/about.jsx"

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


  // userauth
  const { isAuth, user, userid, logout } = useContext(AuthContext);
  zlog("debug","user:",user)
  zlog("debug","userid:",userid)
  zlog("debug","isAuth:",isAuth)

  // LOGIN
  const [open, setOpen] = React.useState(false);
  const [dialogTitle, setTitle] = React.useState('empty');
  const [dialogContent, setContent] = React.useState('empty');
  const handleUserModals = (modal) => {
    setAnchorEl(null);
    handleMenuClose();
    zlog('info',"user MODAL:",modal);
    switch (modal) {
      case 'about':
        setTitle("About...");
        //setContent(modalAboutMessage());
        break;
      case 'team':
        setTitle("The Dev Team...");
        //setContent(modalAboutTeam());
        break;
      case 'contact':
        setTitle("Contact Us...");
        //setContent("content for contact");
        break;
      case 'cpolicy':
        setTitle("Cookies Policy...");
        //setContent("content for cookies plicy");
        break;
      case 'ppolicy':
        setTitle("Privacy Policy...");
        //setContent(modalPrivacyPolicy());
        break;
      case 'logout':
        logout();
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
    logout();
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
      {isAuth ? <MenuItem onClick={() => handleUserModals('profile')}>Profile</MenuItem> : null}
      {isAuth ? <MenuItem onClick={() => handleUserModals('account')}>My account</MenuItem> : null}
      <MenuItem onClick={handleLoginForm}>Sign In</MenuItem>
      <MenuItem onClick={handleSignUp}>Sign Up</MenuItem>
      {isAuth ? <MenuItem onClick={() => handlelogout()}>Logout</MenuItem> : null}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';


  //
  // menu drawer
  //
  const [dopen, setDOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setDOpen(true);
  };
  const handleDrawerClose = () => {
    setDOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Login open={loginopen} close={handleLoginClose}></Login>
      <SignUp open={signupopen} close={handleSignUpClose}></SignUp>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, ...(dopen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
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
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
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

            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }} >
            {user ? user : "null user"}
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
              <AccountCircle />
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
        open={dopen} close= {handleDrawerClose}></PersistentDrawerLeft>
    </Box>
  );
}