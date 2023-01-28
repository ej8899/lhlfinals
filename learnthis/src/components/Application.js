import React, { useContext, useEffect, useRef, useState } from "react";
import "./Application.scss";
import Masonry from '@mui/lab/Masonry';
import CssBaseline from '@mui/material/CssBaseline';
import MUICookieConsent from './CookieConsent.jsx';
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

// modal windows  --
// TODO this can be removed after all are converted to MUI modal
import ZModal, { zmodalUpdater } from "./Modal/index.js";
import {
  modalAboutMessage, modalCookiesMessage, modalPrivacyPolicy, modalReleaseNotes
} from "./Modal/ModalData.js";

import NavBar from "./Nav/NavBar.jsx";
import PreviewItem from "./Previews";
import SiteFooter from "./Footer";
import Hero from "./Hero/Hero.jsx";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from "@mui/material/colors";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
//
// application - main function
//
export default function Application(props) {
  const sampledata = [
    {
      id: 1,
      videoID: "rxnX1jdoI6c",
      category:"CSS",
      stage: "Beginner",
      rating: 3.7 
    },
    {
      id: 2,
      videoID:"0KEpWHtG10M",
      category: "JS",
      stage:"Intermediate",
      rating: 1.2
    },
    {
      id: 3,
      videoID:"r8Dg0KVnfMA",
      category: "React",
      stage: "Beginner",
      rating: 4
    },
    {
      id: 4,
      videoID:"3VHCxuxtuL8",
      category: "NodeJS",
      stage: "Intermediate",
      rating: 2.7
    },
    {
      id: 5,
      videoID:"ha3a63YjLro",
      category: "JS",
      stage: "Advanced",
      rating: 4.9
    },
    {
      id: 6,
      videoID:"s-yvlPTDak0",
      category: "JS",
      stage: "Intermediate",
      rating: 3.6
    },
    {
      id: 7,
      videoID:"r-yxNNO1EI8",
      category: "JS",
      stage: "Intermediate",
      rating: 4.2
    },
    {
      id: 8,
      videoID:"9sWEecNUW-o",
      category: "CSS",
      stage: "Intermediate",
      rating: 2.0
    },
    {
      id: 9,
      videoID:"NQULKpW6hK4",
      category: "React",
      stage: "Intermediate",
      rating: 2.8
    },
    {
      id: 10,
      videoID:"r8Dg0KVnfMA",
      category: "React",
      stage: "Beginner",
      rating: 4.1
    }
  ]
  const typeCategory = [
    'CSS', 'React', 'Javascript', 'NodeJS', 'SQL', 'SASS', 'Ruby'
  ]

  const sampleComplexity = [
    'Beginner', 'Intermediate', 'Advanced'
  ]



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
  const [nowloading, setLoading] = useState(true);
  const pageloader = document.getElementById('pageloader');
  if(pageLoading === true) {
    global.config.goSleep(2000).then(()=> {   // update here if we want to delay even more
      pageloader.style.display = "none";
      setPageLoading(false);
    })
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

  // TODO remove these modal details after conversion to MUI modals
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
    // TODO why is userwarning showing twice.. need only 1
    //zlog('userwarning');

    // TODO convert this cookies code to use the MUI modal, but need to save state of acceptance to localstorage
    if (global.config.cookiesModal) {
      //cookiesModal(true);
      setLoading(true)
      setclassName("layout fadein")
    }
  
    //   global.config.goSleep(2000).then(()=> { setclassName("layout fadein"); });
    global.config.goSleep(4000).then(()=> {setLoading(false);});

  }, []);

  // TODO remove this code if mui cookies modal is fine - but be sure showPrivacy is linked to child modal
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
  (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <div className="maincontainer"><NavBar/>
        <header>
        <Hero></Hero>
        {theme.palette.mode} mode
      <IconButton sx={ {m1: 1} } onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </header>


        <Box sx={{ width: 1400, minHeight: 377 }}>
        <Masonry columns={4} spacing={2}>
        {sampledata.map((item, index) => (
          <PreviewItem key={item.id} videoId={ item.videoID } stage={item.stage} category={item.category} nowloading={nowloading} rating={item.rating} complexity={sampleComplexity} typeCategory={typeCategory}>
          {item.id}
          </PreviewItem>
        ))}
        </Masonry>
        </Box>
        
        <SiteFooter></SiteFooter>
      </div>

      <MUICookieConsent 
  cookieName="mySiteCookieConsent"
  componentType="Dialog" // default value is Snackbar
  message="This site uses cookies.... bla bla..."
/>

    </ThemeProvider>
    </ColorModeContext.Provider>
    )
  );
}
