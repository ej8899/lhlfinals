
import React, { useContext, useEffect, useRef, useState } from "react";
import "./Application.scss";
import Masonry from '@mui/lab/Masonry';

// TODO This element needs to lazy load with 'shimmer' effect

// light and dark mode switch / theme switch
import {
  getDefaultTheme, ThemeContext
} from "./ThemeContext.jsx";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// console log helper
import zlog from "../helpers/zlog.js";

// modal windows
import ZModal, { zmodalUpdater } from "./Modal/index.js";
import {
  modalAboutMessage, modalCookiesMessage, modalPrivacyPolicy, modalReleaseNotes
} from "./Modal/ModalData.js";

import NavBar from "./Nav/NavBar.jsx";
import PreviewItem from "./Previews";
import SiteFooter from "./Footer";
import Hero from "./Hero/Hero.jsx";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
//
// application - main function
//
export default function Application(props) {
  const sampledata = [
    "0KEpWHtG10M","r8Dg0KVnfMA","3VHCxuxtuL8","ha3a63YjLro","s-yvlPTDak0","r-yxNNO1EI8","9sWEecNUW-o","NQULKpW6hK4","r8Dg0KVnfMA","rxnX1jdoI6c",
  ];

  
  global.config.youtubekey = process.env.REACT_APP_YOUTUBE_API_KEY;
  //
  // set up for light and dark modes
  //
  // const [theme, setTheme] = useState(getDefaultTheme);
  // function toggleTheme() {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  //  setup controlled page loader -- NOTE check our useEffect for smooth load of app itself
  const [pageLoading,setPageLoading] = useState(true);
  const pageloader = document.getElementById('pageloader');
  if(pageLoading === true) {
    global.config.goSleep(2000).then(()=> {   // update here if we want to delay even more
      pageloader.style.display = "none";
      setPageLoading(false); 
    });
  }
  // classes for main display
  const [className, setclassName] = useState("layout");
  

  //
  // MODAL WINDOWS: 
  // set up states & defaults for our zmodal windows
  //
  const [zmodalData, updateZModal] = useState({
    message: "",
    button: "",
    settings: {
      noAbort: true,
    },
    show: false,
  });

  function showAbout() {
    zmodalUpdater(updateZModal, zmodalData, modalAboutMessage({clickFunction: showReleaseNotes}));
  }
  function showReleaseNotes() {
    zmodalUpdater(updateZModal, zmodalData, modalReleaseNotes());
  }
  function showPrivacy() {
    zmodalUpdater(updateZModal, zmodalData, modalPrivacyPolicy());
  } 


  //
  // useEffect - actions on first load
  // https://dmitripavlutin.com/react-useeffect-explanation/
  //
  useEffect(() => {
    //zlog('userwarning');
    if (global.config.cookiesModal) {
      cookiesModal(true);
    }
    global.config.goSleep(2000).then(()=> { setclassName("layout fadein"); });
  }, []);

  function cookiesModal(modalState = false) {
    zmodalUpdater(
      updateZModal,
      zmodalData,
      modalCookiesMessage({ clickFunction: showPrivacy })
    );
    // TODO -load from localStorage - don't show modal if we've done it before (cookies only)
    // TODO - update localStorage once user says ok
  }





  
  //<ThemeContext.Provider value={{ theme, setTheme }}>

  // from MUI
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  
  return (
    !pageLoading && (
    
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <div className="maincontainer"><NavBar/>
        <header>
        <Hero></Hero>
        {theme.palette.mode} mode
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </header>

        <main className={className} id={theme}>

        <Box sx={{ width: 1000, minHeight: 377 }}>
        <Masonry columns={4} spacing={2}>
        {sampledata.map((item, index) => (
          <PreviewItem key={index} videoId={{ item }}>
          {index + 1}
          </PreviewItem>
        ))}
        </Masonry>
        </Box>
          
        </main>
        <br></br>
        <SiteFooter></SiteFooter>
        <br></br>
      </div>

      {global.config.cookiesModal && (
              <ZModal
                settings={zmodalData.settings}
                buttontext={zmodalData.button}
                show={zmodalData.show}
                onClose={() =>
                  zmodalUpdater(updateZModal, zmodalData, { show: false })
                }
                title="Why yes, we do use cookies..."
              >
                {zmodalData.message}
              </ZModal>
            )}
    </ThemeProvider>
    </ColorModeContext.Provider>
    )
  );
}
