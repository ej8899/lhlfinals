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
<footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <GitHubIcon/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <LinkedInIcon/>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Cookie Policy</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Privacy Policy</a></li>
    </ul>
    &copy;2023, All Rights Reserved
  </footer>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};