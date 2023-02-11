// --------------------------------------------------------
// React Imports
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Imports

// --------------------------------------------------------

// --------------------------------------------------------
// Material UI Icon Imports

// --------------------------------------------------------

// --------------------------------------------------------
// Import Manual Field Functions
// --------------------------------------------------------


// --------------------------------------------------------
// Import Helper Functions
// --------------------------------------------------------


// --------------------------------------------------------
// Import Icons Functions
// --------------------------------------------------------




export const IconContext = createContext();

export const IconProvider = ({ children }) => {

  let iconObject = {
    "profile_id" : null,
    "resource_id" : null,
    "is_favourite" : false,
    "is_playlist" : false,
    "is_reported" : false,
    "is_bookmarked" : false,
    "is_recommended" : false,
    "is_liked" : false
  }

  const [iconState, setIconState] = useState(iconObject)
  

// TODO -- change when backend data avaialble - less parameters needed
  const iconData = (values) => {

    const reference = {
      resource : {
        // "minimum_average_rating": 3,
        "minimum_likes": 8,
        "minimum_is_recommended": 5,
        // "minimum_average_ranking" : 34,
        // "maximum_average_ranking" : 66,
        // "excluded_minimum_average_ranking" : 45,
        // "excluded_maximum_average_ranking" : 56,
        // "created_last_num_hours" : 36,
        // "is_deleted" : false, 
        // "categories" : ["Ruby", "JavaScript", "CSS"], 
        // "created_by" : 1, 
        "limit" : 35,
        // "order_by" : "most_liked"
      },
      user: {
        // "profile_id" : 5, 
        "is_liked" : true,
        // "is_favourite" : true,
        // "is_bookmarked" : true,
        // "is_playlist" : true,
        // "is_reported" : true,
        // "is_playlist" : true,
        "is_recommended" : true,
        // "minimum_myRating" : 3,
        // "maximum_myRating" : 3,
        // "minimum_myRanking" : 23,
        // "maximum_myRanking" : 45,
      }
    }

    
    let iconStatusObject = iconState

    for (let i = 0; i < 8; i++) {
      switch(i) {
        case 0 : 
          if(values[i] === "default") {
            iconStatusObject.is_favourite = false
          } else {
            iconStatusObject.is_favourite = true
          }
          break;
        case 2 : 
          if(values[i] === "default") {
            iconStatusObject.is_recommended = false
          } else {
            iconStatusObject.is_recommended = true
          }
          break;
        case 3 : 
          if(values[i] === "default") {
            iconStatusObject.is_playlist = false
          } else {
            iconStatusObject.is_playlist = true
          }
          break;
        case 1 : 
          if(values[i] === "default") {
            iconStatusObject.is_liked = false
          } else {
            iconStatusObject.is_liked = true
          }
          break;
        case 5 : 
          if(values[i] === "default") {
            iconStatusObject.is_reported = false
          } else {
            iconStatusObject.is_reported = true
          }
          break;
        case 4 : 
          if(values[i] === "default") {
            iconStatusObject.is_bookmarked = false
          } else {
            iconStatusObject.is_bookmarked = true
          }
          break;
        case 6 : 
          iconStatusObject.resource_id = values[i]
          break;
        case 7 : 
          iconStatusObject.profile_id = values[i]
          break;
        default:
          break;
      }
    }

    console.log(iconStatusObject)
    setIconState(iconStatusObject)

    // TODO -- update with API AXIOS GET ROUTE && Confirm nothing needed in the response
    // axios.post(`http://localhost:8080/api/resources`, {iconStatusObject}) 
    // .then(response => {

    // })
    // .catch(error => {
    //   console.error(error);
    // });
  }

  return (
    <IconContext.Provider
      value={{
        iconState,
        iconData,
      }}
    >
      {children}
    </IconContext.Provider>
  );
};