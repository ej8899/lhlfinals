import React, { useContext, useEffect, useRef, useState } from "react";
import "./Application.scss";
import Masonry from '@mui/lab/Masonry';
import CssBaseline from '@mui/material/CssBaseline';
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
import { modalCookiesMessage } from "./Modal/contentMisc.jsx";

// modal windows  --
// TODO this can be removed after all are converted to MUI modal
import AboutDialog from "./Modal/about";

import NavBar from "./Nav/NavBar.jsx";
import PreviewItem from "./Previews";
import SiteFooter from "./Footer";
import Hero from "./Hero/Hero.jsx";

import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { green, red } from "@mui/material/colors";

// --------------------------------------------------------
// Import 
import StateStatus from '../hooks/state';
import { NewResource } from "./Icons/newResource";
import { AddNewResource } from "./NewResource/newResource";
import { StatusModal } from "../components/NewResource/status";
import AddResourceFlow from "./NewResource/AddResource";
import Fade from '@mui/material/Fade';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
//
// application - main function
//
export default function Application(props) {

  const [sampledata, setsampledata] = useState([
    {
      id: 1,
      profile_id : 1,
      // videoID: "rxnX1jdoI6c",
      videoURL: 'https://www.youtube.com/watch?v=rxnX1jdoI6c',
      created_at: "2023-01-31T13:54:46.365Z",
      title: "5 common beginner CSS mistakes",
      thumbnail: "https://i.ytimg.com/vi/rxnX1jdoI6c/sddefault.jpg",
      description: `I often see beginners making the same mistakes over and over again, so in this video I take a look at some common issues and give some advice on how I think things could be improved.

      🔗 Links 
      ✅ Live Server VS Code extension: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
      ✅ Flexbox or Grid - How to decide? https://youtu.be/3elGSZSWTbM
      
      ⌚ Timestamps
      00:00 - Introduction
      00:35 - Useless declarations (that can cause problems)
      04:04 - Over-reliance of Flexbox
      06:37 - Using very specific values
      10:44 - Terrible class names and numbering elements for no reason
      14:00 - Over-reliance on position absolute
      
      #css
      
      --
      
      Come hang out with other dev's in my Discord Community
      💬 https://discord.gg/nTYCvrK
      
      Keep up to date with everything I'm up to
      ✉ https://www.kevinpowell.co/newsletter
      
      Come hang out with me live every Monday on Twitch!
      📺 https://www.twitch.tv/kevinpowellcss
      
      ---
      
      Help support my channel
      👨‍🎓 Get a course: https://www.kevinpowell.co/courses
      👕 Buy a shirt: https://teespring.com/stores/making-the-internet-awesome
      💖 Support me on Patreon: https://www.patreon.com/kevinpowell
      
      ---
      
      My editor: VS Code - https://code.visualstudio.com/
      
      ---
      
      I'm on some other places on the internet too!
      
      If you'd like a behind the scenes and previews of what's coming up on my YouTube channel, make sure to follow me on Instagram and Twitter.
      
      Twitter: https://twitter.com/KevinJPowell
      Codepen: https://codepen.io/kevinpowell/
      Github: https://github.com/kevin-powell
      
      ---
      
      And whatever you do, don't forget to keep on making your corner of the internet just a little bit more awesome!`,
      category:["CSS"],
      stage: 15,
      rating: 3.7,
      likes: 32
    },
    {
      id: 2,
      profile_id : 2,
      // videoID:"0KEpWHtG10M",
      videoURL: 'https://www.youtube.com/watch?v=0KEpWHtG10M',
      created_at: "2023-02-01T13:54:46.365Z",
      title: "Material UI Tutorial #1 - Intro & Setup",
      thumbnail: "https://i.ytimg.com/vi/0KEpWHtG10M/sddefault.jpg",
      description: `Hey gang & welcome to this Material UI tutorial for React. In this series we'll be looking at what Material UI is & how to use it to create greate-looking React applications. To begin with we'll set up our starter project.

      🐱‍💻 🐱‍💻 Course Files:
      + https://github.com/iamshaunjp/material-ui-tut
      
      🐱‍👤🐱‍👤 JOIN THE GANG - 
      https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/join
      
      🐱‍💻 🐱‍💻 My Udemy Courses:
      + Modern JavaScript - https://www.thenetninja.co.uk/udemy/modern-javascript
      + Vue JS 3  & Firebase - https://www.thenetninja.co.uk/udemy/vue-and-firebase
      + D3.js & Firebase - https://www.thenetninja.co.uk/udemy/d3-and-firebase
      
      🐱‍💻 🐱‍💻 Useful playlists:
      + Full React tutorial - https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
      + JSON Server Tutorial - https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD
      
      🐱‍💻 🐱‍💻 Other links:
      + Material UI docs - https://material-ui.com/getting-started/installation/
      + Get VS Code - https://code.visualstudio.com/
      
      🐱‍💻 🐱‍💻 Social Links:
      Facebook - https://www.facebook.com/thenetninjauk
      Twitter - https://twitter.com/thenetninjauk
      Instagram - https://www.instagram.com/thenetninja/`,
      category: ["JavaScript", "React"],
      stage:50,
      rating: 1.2,
      likes: 0
    },
    {
      id: 3,
      profile_id : 1,
      // videoID:"r8Dg0KVnfMA",
      videoURL: 'https://www.youtube.com/watch?v=r8Dg0KVnfMA&t=1s',
      created_at: "2023-01-28T08:54:46.365Z",
      title: "Learn React Query In 50 Minutes",
      thumbnail: "https://i.ytimg.com/vi/r8Dg0KVnfMA/sddefault.jpg",
      description: `Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today

      TanStack Query (also known as React Query) is my favorite way to interact with an external API. TanStack query is so easy to use and it gives you so many features by default which I love. In this video I go over everything you need to know about TanStack query in order to start implementing it in your React projects.
      
      
      📚 Materials/References:
      
      Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today
      GitHub Code: https://github.com/WebDevSimplified/react-query-crash-course-example
      What Is React Query Video: https://youtu.be/lVLz_ASqAio
      
      
      🌎 Find Me Here:
      
      My Blog: https://blog.webdevsimplified.com
      My Courses: https://courses.webdevsimplified.com
      Patreon: https://www.patreon.com/WebDevSimplified
      Twitter: https://twitter.com/DevSimplified
      Discord: https://discord.gg/7StTjnR
      GitHub: https://github.com/WebDevSimplified
      CodePen: https://codepen.io/WebDevSimplified
      
      
      ⏱️ Timestamps:
      
      00:00 - Introduction
      00:44 - What Is TanStack Query
      01:20 - Setup
      03:18 - Basic Example
      14:15 - useQuery Basics
      26:10 - useMutation Basics
      39:12 - Pagination
      41:28 - Infinite Scrolling
      44:40 - useQueries Hook
      47:22 - Prefetching
      49:13 - Initial/Placeholder Data
      
      
      #TanStackQuery #WDS #ReactQuery`,
      category: ["React"],
      stage: -1,
      rating: 4,
      likes:56
    },
    {
      id: 4,
      profile_id : 2,
      // videoID:"3VHCxuxtuL8",
      videoURL: 'https://www.youtube.com/watch?v=3VHCxuxtuL8',
      created_at: "2023-01-29T23:01:46.365Z",
      title: "How to Use YouTube API in Node - Full Tutorial",
      thumbnail: "https://i.ytimg.com/vi/3VHCxuxtuL8/sddefault.jpg",
      description: `In this video you will learn how to use Youtube API in Node in two ways: as a plain Youtube API and with usage of library. We will start by creating a project and obtaining a key in Google Cloud. Then we will build a real example of how to use Youtube API in Node by making API requests with axios library. After that we will implement and example with google apis library which is a sugar around Youtube API.

      ► CHECK MY COURSES - https://monsterlessons-academy.com/courses
      
      FOLLOW ME
      ► TWITTER - https://twitter.com/monster_lessons
      
      REFERENCES
      ► Source code - https://github.com/monsterlessonsacademy/monsterlessonsacademy/tree/108-how-to-use-youtube-api-in-node
      
      RECOMMENDED VIDEOS
      ► Angular Tutorial for Beginners - https://youtu.be/Pd98NIR63cU
      ► Vue JS Crash Course - https://youtu.be/89z5opT_3so
      ► React Hooks Full Course  - https://youtu.be/h7RC-aVmPqE
      ► Typescript Course for Beginners - https://youtu.be/RXZoCljqYOE
      ► Build a Todo App with Angular - https://youtu.be/uyTC0Skvvls
      
      STUFF I USE
      ► My mac mini for home on Amazon - https://geni.us/mADK6ob
      ► Mac macbook to go on Amazon - https://geni.us/t0fC
      ► My monitors on Amazon - https://geni.us/aRoFoR
      ► My mouse on Amazon - https://geni.us/FTzq
      ► My keyboard on Amazon - https://geni.us/wAjpl
      
      ► My Synology NAS on Amazon - https://geni.us/H9BeFo
      ► My Seagate IronWolf 4TB HDD on Amazon - https://geni.us/09Hvpm
      ► My external SSD drive on Amazon - https://geni.us/jg3MGNt
      ► My external HDD drive on Amazon - https://geni.us/5HCIAX
      
      ► My monitor arm on Amazon - https://geni.us/OuX1
      ► My chair on Amazon - https://geni.us/wGWq
      ► My speakers on Amazon - https://geni.us/wM4fIn
      ► My coffee machine on Amazon - https://geni.us/zP1uEbW
      ► My standing desk - https://www.fully.com/en-eu/standing-desks/jarvis/jarvis-adjustable-height-desk-laminate.html
      
      Disclosures: All opinions are my own. Sponsors are acknowledged. Some links in the description are affiliate links that if you click on one of the product links, I’ll receive a commission at no additional cost to you.  As an Amazon Associate I earn a small commission from qualifying purchases.`,
      category: ["Node.js"],
      stage: 0,
      rating: 2.7,
      likes: 18
    },
    {
      id: 5,
      profile_id : 1,
      // videoID:"ha3a63YjLro",
      videoURL: 'https://www.youtube.com/watch?v=ha3a63YjLro',
      created_at: "2023-02-02T19:21:34.735Z",
      title: "Material UI Tutorial #2 - Typography",
      thumbnail: "https://i.ytimg.com/vi/ha3a63YjLro/sddefault.jpg",
      description: `Hey gang, in this Material UI tutorial we'll take a look at the Typography component to make/style headings & normal text.

      🐱‍💻 🐱‍💻 Course Files:
      + https://github.com/iamshaunjp/material-ui-tut
      
      🐱‍👤🐱‍👤 JOIN THE GANG - 
      https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/join
      
      🐱‍💻 🐱‍💻 My Udemy Courses:
      + Modern JavaScript - https://www.thenetninja.co.uk/udemy/modern-javascript
      + Vue JS 3  & Firebase - https://www.thenetninja.co.uk/udemy/vue-and-firebase
      + D3.js & Firebase - https://www.thenetninja.co.uk/udemy/d3-and-firebase
      
      🐱‍💻 🐱‍💻 Useful playlists:
      + Full React tutorial - https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
      + JSON Server Tutorial - https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD
      
      🐱‍💻 🐱‍💻 Other links:
      + Material UI docs - https://material-ui.com/getting-started/installation/
      + Get VS Code - https://code.visualstudio.com/
      
      🐱‍💻 🐱‍💻 Social Links:
      Facebook - https://www.facebook.com/thenetninjauk
      Twitter - https://twitter.com/thenetninjauk
      Instagram - https://www.instagram.com/thenetninja/`,
      category: ["JavaScript", "React"],
      stage: 89,
      rating: 4.9,
      likes: 101
    },
    {
      id: 6,
      profile_id : 2,
      // videoID:"s-yvlPTDak0",
      videoURL: 'https://www.youtube.com/watch?v=s-yvlPTDak0',
      created_at: "2023-01-31T19:21:34.735Z",
      title: "ChatGPT Teaches Flexbox!",
      thumbnail: "https://i.ytimg.com/vi/s-yvlPTDak0/sddefault.jpg",
      description: `ChatGPT is an AI chatbot that can provide human-like responses to questions we ask. I asked it to create a video tutorial script about Flexbox, along with the code to go with it. This is what it came up with.

      Let me know your thoughts in the comments down below :).
      
      ⭐⭐ Get access to all courses (including premium courses not found anywhere else) on Net Ninja Pro - https://netninja.dev/`,
      category: ["JavaScript", "CSS"],
      stage: 67,
      rating: 3.6,
      likes: 54
    },
    {
      id: 7,
      profile_id : 3,
      // videoID:"r-yxNNO1EI8",
      videoURL: 'https://www.youtube.com/watch?v=r-yxNNO1EI8',
      created_at: "2023-01-26T19:21:34.735Z",
      title: "YouTube API Project With Authentication",
      thumbnail: "https://i.ytimg.com/vi/r-yxNNO1EI8/sddefault.jpg",
      description: `In this JavaScript project we will use the YouTube API v3 to fetch channel data and videos. We will create a search form to change channels and use OAuth2 to login and logout.

      Sponsor: Coding Phase [GET 50% OFF!!] 
      https://codingphase.teachable.com/p/all-courses-subscription/?coupon_code=TRAVERSY50&affcode=117955_0bufn2zv
      
      Code:
      https://github.com/bradtraversy/youtube_api_auth_app
      
      Docs:
      https://developers.google.com/youtube/v3/quickstart/js
      https://developers.google.com/youtube/v3/docs/playlistItems/list
      
      💖 Become a Patron: Show support & get perks!
      http://www.patreon.com/traversymedia
      
      Website & Udemy Courses
      http://www.traversymedia.com
      
      Follow Traversy Media:
      http://www.facebook.com/traversymedia
      http://www.twitter.com/traversymedia
      http://www.instagram.com/traversymedia`,
      category: ["JavaScript"],
      stage: 100,
      rating: 4.2,
      likes: 62
    },
    {
      id: 8,
      profile_id : 1,
      // videoID:"9sWEecNUW-o",
      videoURL: 'https://www.youtube.com/watch?v=9sWEecNUW-o',
      created_at: "2023-01-31T19:21:34.735Z",
      title: "Code your own YouTube app: YouTube API + HTML + CSS + JavaScript (full tutorial)",
      thumbnail: "https://i.ytimg.com/vi/9sWEecNUW-o/sddefault.jpg",
      description: `Create a dynamic YouTube playlist app using HTML, CSS, Javascript and jQuery.

      🔗The Completed App - https://codepen.io/Middi/pen/QQrOdB
      
      🔗 Thumbnail image - https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg
      🔗YouTube Logo - https://github.com/Middi/youtube-api/blob/master/images/logo.png
      
      🎥Check out Richard's YouTube channel - https://www.youtube.com/channel/UCimIdsDPn0mE03Cb7C6aR8Q
      
      --
      
      Learn to code for free and get a developer job: https://www.freecodecamp.com
      
      Read hundreds of articles on programming: https://medium.freecodecamp.com`,
      category: ["CSS", "HTML", "JavaScript"],
      stage: 34,
      rating: 2.0,
      likes: 8
    },
    {
      id: 9,
      profile_id : 1,
      // videoID:"NQULKpW6hK4",
      videoURL: "https://www.youtube.com/watch?v=NQULKpW6hK4",
      created_at: "2023-01-27T12:21:34.735Z",
      title: "React Query Crash Course",
      thumbnail: "https://i.ytimg.com/vi/NQULKpW6hK4/sddefault.jpg",
      description: `This crash course will teach you all about React Query

      Second Channel:
      https://www.youtube.com/channel/UCfNFgrUzeDSb-W3L3nnjC5A
      
      GitHub Repo:
      https://github.com/harblaith7/React-Query
      
      Timeline:
      0:00 - Introduction
      2:24 - Fetching without React Query
      11:50 - Refactor to use React Query
      23:48 - Pagination`,
      category: ["React"],
      stage: 68,
      rating: 2.8,
      likes: 34
    },
    {
      id: 10,
      profile_id : 3,
      // videoID:"r8Dg0KVnfMA",
      videoURL: "https://www.youtube.com/watch?v=r8Dg0KVnfMA",
      created_at: "2023-02-02T12:21:34.735Z",
      title: "Learn React Query In 50 Minutes",
      thumbnail: "https://i.ytimg.com/vi/r8Dg0KVnfMA/sddefault.jpg",
      description: `Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today

      TanStack Query (also known as React Query) is my favorite way to interact with an external API. TanStack query is so easy to use and it gives you so many features by default which I love. In this video I go over everything you need to know about TanStack query in order to start implementing it in your React projects.
      
      
      📚 Materials/References:
      
      Learn React Today Course: https://courses.webdevsimplified.com/learn-react-today
      GitHub Code: https://github.com/WebDevSimplified/react-query-crash-course-example
      What Is React Query Video: https://youtu.be/lVLz_ASqAio
      
      
      🌎 Find Me Here:
      
      My Blog: https://blog.webdevsimplified.com
      My Courses: https://courses.webdevsimplified.com
      Patreon: https://www.patreon.com/WebDevSimplified
      Twitter: https://twitter.com/DevSimplified
      Discord: https://discord.gg/7StTjnR
      GitHub: https://github.com/WebDevSimplified
      CodePen: https://codepen.io/WebDevSimplified
      
      
      ⏱️ Timestamps:
      
      00:00 - Introduction
      00:44 - What Is TanStack Query
      01:20 - Setup
      03:18 - Basic Example
      14:15 - useQuery Basics
      26:10 - useMutation Basics
      39:12 - Pagination
      41:28 - Infinite Scrolling
      44:40 - useQueries Hook
      47:22 - Prefetching
      49:13 - Initial/Placeholder Data
      
      
      #TanStackQuery #WDS #ReactQuery`,
      category: [],
      stage: 33,
      rating: 4.1,
      likes: 87
    },
    {
      id: 11,
      profile_id : 2,

      videoURL: "https://stackoverflow.com/questions/70693305/modal-windows-in-react",
      created_at: "2023-02-03T12:21:34.735Z",
      title: "Modal Windows In React",
      thumbnail: "https://storage.screenshotapi.net/stackoverflow_com_questions_70693305_modal_windows_0142c12e6da4.png",
      description: `
      Here you can see my code in React.js
      
      I want to have several modal windows in one React component. I tried to use Modal from “react-native”, but it did not work.`,
      category: ["React"],
      stage: 34,
      rating: 2.8,
      likes: 34
    }
  ])

  // TODO DELETE THESE:
  const typeCategory = [
    "Adonis.js",
    "Angular",
    "ASP.NET",
    "C#",
    "C++",
    "CSS",
    "Django",
    "Ember",
    "Express",
    "Express.js",
    "Flask",
    "Go",
    "GraphQL",
    "HTML",
    "Java",
    "JavaScript",
    "jQuery",
    "Kotlin",
    "Less",
    "Meteor",
    "MongoDB",
    "MySQL",
    "Nest.js",
    "Next.js",
    "Node.js",
    "PHP",
    "PostgreSQL",
    "Python",
    "React",
    "Ruby on Rails",
    "Ruby",
    "Rust",
    "Sass",
    "Scala",
    "Spring",
    "SQL",
    "Swift",
    "TypeScript",
    "Vue",
    
  ]

  const sampleComplexity = [
    'Beginner', 'Intermediate', 'Advanced'
  ]



  global.config.youtubekey = process.env.REACT_APP_YOUTUBE_API_KEY;

  //  setup controlled page loader -- NOTE check our useEffect for smooth load of app itself
  const [pageLoading,setPageLoading] = useState(true);
  const [nowloading, setLoading] = useState(true);
  const [showAddResource, setShowAddResource] = useState("none")
  const pageloader = document.getElementById('pageloader');
  if(pageLoading === true) {
    global.config.goSleep(2000).then(()=> {   // update here if we want to delay even more
      pageloader.style.display = "none";
      setPageLoading(false);
      setTimeout(() => {
        setShowAddResource("flex")
      }, 4000)
    })
  }
  // classes for main display
  const [className, setclassName] = useState("layout");


  // from MUI
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        if(mode === 'light') {
          localStorage.setItem("isDarkMode", 'dark');
          global.config.currentTheme = 'dark';
        } else {
          localStorage.setItem("isDarkMode",'light');
          global.config.currentTheme = 'light';
        }
      },
    }),
    [mode],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              root: {
                height: '100vh',
                overflowY: 'scroll'
              },
              body: {
                // color: "darkred",
                // backgroundColor: "grey",
                // "& h1": {
                //   color: "orange"
                // }
       
              }
            }
          }
        }    
      }),
    [mode],
  );
  


  // COOKIES Modal
  const [copen, setCOpen] = React.useState(false);
  const handleCClose = () => setCOpen(false);

  const [cookiesMessage,setCMessage] = useState('cookies default');

  //
  // useEffect - actions on first load
  // https://dmitripavlutin.com/react-useeffect-explanation/
  //
  useEffect(() => {
    // grab theme settings
    // localStorage.clear()
    if (!localStorage.getItem("isDarkMode")) {
      localStorage.setItem("isDarkMode",'light');
    } else {
      const isDarkMode = localStorage.getItem("isDarkMode");
      setMode(isDarkMode);
      global.config.currentTheme = isDarkMode;
      zlog('info',"THEME FROM localstorage:",isDarkMode)
    }
    

    // TODO why is userwarning showing twice.. need only 1
    //zlog('userwarning');

    // TODO convert this cookies code to use the MUI modal, but need to save state of acceptance to localstorage
    // TODO - cookies modal should be 'disabled' if user has already been to site and accepted cookies modal - 
    // this should set for 30 days and then come back on until they accept again.
    if (global.config.cookiesModal) {
      //cookiesModal(true);
      setLoading(true)
      setclassName("layout fadein")
    }
  
    //   global.config.goSleep(2000).then(()=> { setclassName("layout fadein"); });
    global.config.goSleep(4000).then(()=> {setLoading(false);});

    setCMessage(modalCookiesMessage);
    setCOpen(true);

  }, []);

    // TODO -load from localStorage - don't show modal if we've done it before (cookies only)
    // TODO - update localStorage once user says ok
  
    // TODO move theme button  - light-dark to nav bar
    // TODO - remove the 'light mode' 'dark mode' text from theme button




    

    
  return (
  (
    <ColorModeContext.Provider value={colorMode}>
      
    <ThemeProvider theme={theme}>
    <CssBaseline  enableColorScheme/>
    
      <div className="maincontainer">
        <NavBar darkMode={theme.palette.mode} handleDarkMode={colorMode.toggleColorMode}></NavBar>

      <header>
        <Hero catList={typeCategory}></Hero>
      </header>

      <Box display={showAddResource}>
          <AddResourceFlow complexity={sampleComplexity} typeCategory={typeCategory} sampledata={sampledata} setsampledata={setsampledata} />
      </Box>

        <Box sx={{ width: 1400, minHeight: 377 }}>
        <Masonry columns={4} spacing={2}>
        {sampledata.map((item, index) => (
          <PreviewItem key={item.id} id={item.id} videoURL={ item.videoURL } stage={item.stage} category={item.category} nowloading={nowloading} rating={item.rating} complexity={sampleComplexity} typeCategory={typeCategory} likes={item.likes} title={item.title} thumbnail={item.thumbnail} description={item.description} created_at={item.created_at} sampledata={sampledata} setsampledata={setsampledata}>
          {item.id}
          </PreviewItem>
        ))}
        </Masonry>
        </Box>
        
        <SiteFooter/>
      </div>
      


      <AboutDialog title={"cookies..."} open={copen} handleClose={handleCClose} description={cookiesMessage}></AboutDialog>

    </ThemeProvider>
    </ColorModeContext.Provider>
    )
  );
}
