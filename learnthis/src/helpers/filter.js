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




export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {



  // Resource Related
  const [minComplexity, setMinComplexity] = useState(null);
  const [maxComplexity, setMaxComplexity] = useState(null);
  const [minRating, setMinRating] = useState(null);
  const [minLikes, setMinLikes] = useState(null);
  const [hasCategory, setHasCategory] = useState([]);

  // User Profile Related
  const [isMyResource, setIsMyResource] = useState(false);
  const [isFavourite, setIsFavourites] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [isPlaylist, setIsPlaylist] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false)

  const [minMyRating, setMinMyRating] = useState(null);
  const [minMyComplexity, setMinMyComplexity] = useState(null);
  const [maxMyComplexity, setMaxMyComplexity] = useState(null);

  const [sinceCreated, setSinceCreated] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  // const filteredObject = {}

  // const [myFilteredData, setMyFilteredData] = useState(filteredObject)
  const [myFilteredData, setMyFilteredData] = useState({resource: {}, user: {profile_id: null}})


// TODO -- change when backend data avaialble - less parameters needed
  const filterData = (type, values, updateDatabase, tmpUserData, helperfunc, userid) => {

    const reference = {
      resource : {
        "minimum_average_rating": 3,
        "minimum_likes": 8,
        "minimum_is_recommended": 5,
        // "minimum_average_ranking" : 34,
        // "maximum_average_ranking" : 66,
        // "excluded_minimum_average_ranking" : 45,
        // "excluded_maximum_average_ranking" : 56,
        "created_last_num_hours" : 36,
        "is_deleted" : false, 
        // "categories" : ["Ruby", "JavaScript", "CSS"], 
        "created_by" : 1, 
        "limit" : 35,
        "order_by" : "most_liked"
      },
      user: {
        "profile_id" : 5, 
        "is_liked" : true,
        "is_favourite" : true,
        "is_bookmarked" : true,
        "is_playlist" : true,
        "is_reported" : true,
        "is_playlist" : true,
        "is_recommended" : true,
        "minimum_myRating" : 3,
        "minimum_myRanking" : 23,
        "maximum_myRanking" : 45,
      }
    }



    let filteredObject = myFilteredData

    switch (type) {
      case "complexity": {

        let total = 0
      
        for(let item in values) { 
          total = values[item] ? total += Number(item) : total
        }

        switch (total) {
          case 0: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 10: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 33
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 11: {
            filteredObject.resource["minimum_average_ranking"] = 34
            filteredObject.resource["maximum_average_ranking"] = 67
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 12: {
            filteredObject.resource["minimum_average_ranking"] = 68
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 21: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 67
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 22: {
            filteredObject.resource["minimum_excluded_average_ranking"] = 34
            filteredObject.resource["maximum_excluded_average_ranking"] = 67
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 100
            break; 
          }
          case 23: {
            filteredObject.resource["minimum_average_ranking"] = 34
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break; 
          }

        }
        break;
      }
      case "category": {
        filteredObject.resource["categories"] = values
        break;
      }
      case "clear": {
        filteredObject = {resource: {}, user: {profile_id: userid}};
        break;
      }
    }

      // console.log(type)
      // console.log("Total is:", total)
    setMyFilteredData(filteredObject)
    console.log(filteredObject)

    axios.get(`http://localhost:8080/api/resources`)
    .then(response => {

      updateDatabase(helperfunc([response.data[0]], tmpUserData))
      // setsampledata(combinedData(response.data, tmpUserData))
      // console.log(combinedData(response.data, sampleuserdata))
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <FilterContext.Provider
      value={{
        minComplexity,
        maxComplexity,
        minRating,
        minLikes,
        isMyResource,
        isFavourite,
        isReported,
        isPlaylist,
        isLike,
        isBookmark,
        isRecommended,
        minMyRating,
        minMyComplexity,
        maxMyComplexity,
        sinceCreated,
        isDeleted,
        filterData
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};