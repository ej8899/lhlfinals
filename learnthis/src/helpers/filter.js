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
  const [totalkeys, settotalkeys] = useState(1)

// TODO -- change when backend data avaialble - less parameters needed
  const filterData = (type, values, updateDatabase, tmpUserData, helperfunc) => {

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



    let filteredObject = myFilteredData

    switch (type) {
      case "complexity": {

        let total = 0
        let tmpObject = {}
        
        for(let item in values) { 
          total = Number(item) > 5 ? values[item] ? total += Number(item) : total : total
          if (Number(item) < 5){
            tmpObject[item] = values[item]
          }
        }
        // console.log(total)
        // console.log(tmpObject)

        for (let i = 0; i < 4; i++) {
          switch(i) {
            case 0 : {
              if (tmpObject["0"]) {
                filteredObject.resource["created_last_num_hours"] = 36
              } else if (filteredObject.resource.hasOwnProperty('created_last_num_hours')) {
                delete filteredObject.resource.created_last_num_hours
              }
            }
            case 1 : {
              if (tmpObject["1"]) {
                filteredObject.user["is_bookmarked"] = true
              } else if (filteredObject.user.hasOwnProperty('is_bookmarked')) {
                delete filteredObject.user.is_bookmarked
              }
            }
            case 2 : {
              if (tmpObject["2"]) {
                filteredObject.resource["order_by"] = "most_liked"
              } else if (filteredObject.resource.hasOwnProperty('order_by')) {
                delete filteredObject.resource.order_by
              }
            }
            case 3 : {
              if (tmpObject["3"]) {
                filteredObject.resource["minimum_average_rating"] = 3
              } else if (filteredObject.resource.hasOwnProperty('minimum_average_rating')) {
                delete filteredObject.resource.minimum_average_rating
              }
            }
          }
        }

        switch (total) {
          case 0: {
            if (filteredObject.resource.hasOwnProperty("minimum_average_ranking")) {
              delete filteredObject.resource["minimum_average_ranking"]
            }
            if (filteredObject.resource.hasOwnProperty("maximum_average_ranking")) {
              delete filteredObject.resource["maximum_average_ranking"]
            }
            if (filteredObject.resource.hasOwnProperty("minimum_excluded_average_ranking")) {
              delete filteredObject.resource["minimum_excluded_average_ranking"]
            }
            if (filteredObject.resource.hasOwnProperty("maximum_excluded_average_ranking")) {
              delete filteredObject.resource["maximum_excluded_average_ranking"]
            }
            break;
          }
          case 10: {
            filteredObject.resource["minimum_average_ranking"] = 1
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
            filteredObject.resource["minimum_average_ranking"] = 1
            filteredObject.resource["maximum_average_ranking"] = 67
            filteredObject.resource["minimum_excluded_average_ranking"] = null
            filteredObject.resource["maximum_excluded_average_ranking"] = null
            break;
          }
          case 22: {
            filteredObject.resource["minimum_excluded_average_ranking"] = 34
            filteredObject.resource["maximum_excluded_average_ranking"] = 67
            filteredObject.resource["minimum_average_ranking"] = 1
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
        if (values) {
          filteredObject.resource["categories"] = values
        } else if (filteredObject.resource.hasOwnProperty('categories')) {
          delete filteredObject.resource.categories
        }
        break;
      }
      case "clear": {
        filteredObject = {resource: {}, user: {profile_id: values}};
        break;
      }
      case "mine": {
        filteredObject = {resource: {"created_by" : values}, user: {profile_id: values}};
        break;
      }
      case "signin": {
          filteredObject.user["profile_id"] = values
        break;
      }
      case "nav" : {
        for (let i = 0; i < 17; i++) {

          switch(i) {
            case 4 : {
              if (values === 4) {
                filteredObject.resource["created_by"] = filteredObject.user.profile_id
              } else if (filteredObject.resource.hasOwnProperty('created_by')) {
                delete filteredObject.resource.created_by
              }
            }
            case 5 : {
              if (values === 5) {
                filteredObject.user["is_favourite"] = true
              } else if (filteredObject.user.hasOwnProperty('is_favourite')) {
                delete filteredObject.user.is_favourite
              }
            }
            case 6 : {
              if (values === 6) {
                filteredObject.user["is_playlist"] = true
              } else if (filteredObject.user.hasOwnProperty('is_playlist')) {
                delete filteredObject.user.is_playlist
              }
            }
            case 8 : {
              if (values === 8) {
                filteredObject.user["maximum_myRating"] = 2.5
              } else if (filteredObject.user.hasOwnProperty('maximum_myRating')) {
                delete filteredObject.user.maximum_myRating
              }
            }
            case 9 : {
              if (values === 9) {
                filteredObject.user["minimum_myRating"] = 3
              } else if (filteredObject.user.hasOwnProperty('minimum_myRating')) {
                delete filteredObject.user.minimum_myRating
              }
            }
            case 16 : {
              if (values === 16) {
                filteredObject.resource["is_deleted"] = true
              } else if (filteredObject.resource.hasOwnProperty('is_deleted')) {
                delete filteredObject.resource.is_deleted
              }
            }
            case 15 : {
              if (values === 15) {
                filteredObject.user["is_reported"] = true
              } else if (filteredObject.user.hasOwnProperty('is_reported')) {
                delete filteredObject.user.is_reported
              }
            }
            case 11 : {
              if (values === 11) {
                filteredObject.user["minimum_myRanking"] = 0
                filteredObject.user["maximum_myRanking"] = 33
                break
              } 
            }
            case 12 : {
              if (values === 12) {
                filteredObject.user["minimum_myRanking"] = 34
                filteredObject.user["maximum_myRanking"] = 67
                break
              } 
            }
            case 13 : {
              if (values === 13) {
                filteredObject.user["minimum_myRanking"] = 68
                filteredObject.user["maximum_myRanking"] = 100
              } else if (filteredObject.user.hasOwnProperty('minimum_myRanking') ||  filteredObject.user.hasOwnProperty('maximum_myRanking')) {
                if (filteredObject.user.hasOwnProperty('minimum_myRanking')) {
                  delete filteredObject.user.minimum_myRanking
                }
                if (filteredObject.user.hasOwnProperty('maximum_myRanking')) {
                  delete filteredObject.user.maximum_myRanking
                }
              }
              break
            }
          }
        }
      }
    }

    let count = 0;
    for(let key in filteredObject.resource) {
        ++count;
    }
    for(let key in filteredObject.user) {
      ++count;
    }
    settotalkeys(count)
    setMyFilteredData(filteredObject)
    console.log(filteredObject)

    // TODO-- Link Server Code
    axios.get(`http://localhost:8080/api/resources`)
    .then(response => {

      // updateDatabase(helperfunc(response.data, tmpUserData))
      // setsampledata(combinedData(response.data, tmpUserData))
      // console.log(combinedData(response.data, sampleuserdata))

      // This should be the only line needed
      // updateDatabase(helperfunc(response.data))
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
        filterData,
        myFilteredData,
        totalkeys
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};