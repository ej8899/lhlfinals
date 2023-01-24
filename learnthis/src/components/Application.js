
import React, { useContext, useEffect, useRef, useState } from "react";
import "./Application.scss";

//todo This element needs to lazy load with 'shimmer' effect

// light and dark mode switch / theme switch
import {
  getDefaultTheme, ThemeContext
} from "./ThemeContext.jsx";

// console log helper
import zlog from "../zlog.js";

// modal windows
import ZModal, { zmodalUpdater } from "./Modal/index.js";
import {
  modalAboutMessage, modalCookiesMessage, modalPrivacyPolicy, modalReleaseNotes
} from "./Modal/ModalData.js";

import NavBar from "./NavBar.jsx";
import PreviewItem from "./Previews";




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
  const [theme, setTheme] = useState(getDefaultTheme);
  function toggleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

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
    // todo -load from localStorage - don't show modal if we've done it before
    // todo - update localStorage once user says ok
  }


  return (
    !pageLoading && (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      <div className="maincontainer"><NavBar/>
        <header>
        <br></br><br></br><br></br><br></br>
        my app
        </header>

        <main className={className} id={theme}>

        {sampledata.map((item, index) => (
          <PreviewItem key={index} videoId={{ item }}>
          {index + 1}
          </PreviewItem>
        ))}
          
        </main>
        <br></br>
        footer location: <a className="socicons">
                  <i
                    onClick={() => showAbout()}
                    className="fa-solid fa-circle-question fa-xl"
                  ></i>
                </a> | cookies | 
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
    </ThemeContext.Provider>
    )
  );
}
