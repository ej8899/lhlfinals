import * as React from 'react';

import "../Application.scss";
import "./footer.scss";
import AboutDialog from "../Modal/about.jsx"

// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import zlog from '../../helpers/zlog';

export default function SiteFooter(props) {
  function showAbout() {
    // TODO - this is in Application.js currently - needs moved to helper function file for import elsewhere
  }
    // TODO - remove unused icons and CDN scrips below if all icons are transferred to MUI icons

    // TODO - p0 - fix spacing between icons and menu items - same as menu to copyright
    // TODO - menu items below need to open modals w info


    const [open, setOpen] = React.useState(false);
    const [dialogTitle, setTitle] = React.useState('');
    const handleOpen = (modal) => {
      zlog('info',"MODAL:",modal);
      switch (modal) {
        case 'about':
          setTitle("About...");
          break;
        case 'team':
          setTitle("The Dev Team...");
          break;
        default:
          break;
      }
      if(open === true) setOpen(false);
      if(open === false) setOpen(true);
    }
    const handleClose = () => setOpen(false);


  return (
    <div>
<footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <GitHubIcon/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <LinkedInIcon/>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul className="menu">
      <Button onClick={() => handleOpen('about')} variant="contained" >About</Button>&nbsp;
      <AboutDialog title={dialogTitle} open={open} handleClose={handleClose}></AboutDialog>
      <Button onClick={() => handleOpen('team')} variant="contained" >Team</Button>&nbsp;
      <Button onClick={() => handleOpen('contact')} variant="contained" >Contact Us</Button>&nbsp;
      <Button onClick={() => handleOpen('cpolicy')} variant="contained" >Cookie Policy</Button>&nbsp;
      <Button onClick={() => handleOpen('ppolicy')} variant="contained" >Privacy Policy</Button>
    </ul>
    &copy;2023, All Rights Reserved
  </footer>
  
    </div>
  );
};