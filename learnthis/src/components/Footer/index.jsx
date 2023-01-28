import "../Application.scss";
import "./footer.scss";


// mui
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SiteFooter(props) {
  function showAbout() {
    // TODO - this is in Application.js currently - needs moved to helper function file for import elsewhere
  }
    // TODO - remove unused icons and CDN scrips below if all icons are transferred to MUI icons

    // TODO - p0 - fix spacing between icons and menu items - same as menu to copyright
    // TODO - menu items below need to open modals w info

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
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Cookie Policy</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Privacy Policy</a></li>
    </ul>
    &copy;2023, All Rights Reserved
  </footer>
  
    </div>
  );
};