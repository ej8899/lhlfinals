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
import { getdata } from './helpers';
// --------------------------------------------------------


// --------------------------------------------------------
// Import Icons Functions
// --------------------------------------------------------




export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  // --------------------------------------------------------

  const [filterError, setFilterError] = useState(false) 
  const handlefilterError = () => {
    setFilterError(false)
  }

  const [parsedBsampledata, setparsedBsampledata] = useState([])
  const [parsedIsampledata, setparsedIsampledata] = useState([])
  const [parsedAsampledata, setparsedAsampledata] = useState([])

  const [pageB, setPageB] = useState(1)
  const [pageI, setPageI] = useState(1)
  const [pageA, setPageA] = useState(1)

// --------------------------------------------------------

const setData = (sampledata) => {
  let tmpArray = []
  let maxCount = Math.ceil(sampledata.length/5)
  
  for (let x = 0; x < maxCount; x++) {

    let tmpInner = []
    if (x < maxCount -1) {
      for (let y = ((x)*5); y < ((x)*5+5); y++) {
        tmpInner.push(sampledata[y])
      }
    } else {
      for (let y = ((x)*5); y < sampledata.length; y ++) {
        tmpInner.push(sampledata[y])
      }
    }
    tmpArray.push(tmpInner)
  }

  // console.log(tmpArray)
  return tmpArray
}

const beginnerChange = (event, value) => {
  event.stopPropagation()
  setPageB(value)
}

const intermediateChange = (event, value) => {
  setPageI(value)
}

const advancedChange = (event, value) => {
  setPageA(value)
}

// --------------------------------------------------------

  const [myFilteredData, setMyFilteredData] = useState({resource: {}, user: {profile_id: null}})
  const [totalkeys, settotalkeys] = useState(1)

// TODO -- change when backend data avaialble - less parameters needed
  const filterData = (type, values, updateDatabase, tmpUserData, helperfunc, icon = false, setLoading, counter, setResourceCount, setShowMoreCards) => {
  
    const reference = {
      resource : {
        "minimum_average_rating": 3,
        "minimum_likes": 8,
        "minimum_is_recommended": 5,
        "minimum_average_ranking" : 34,
        "maximum_average_ranking" : 66,
        "excluded_minimum_average_ranking" : 45,
        "excluded_maximum_average_ranking" : 56,
        "created_last_num_hours" : 36,
        "is_deleted" : false, 
        "categories" : ["Ruby", "JavaScript", "CSS"], 
        "created_by" : 1, 
        "limit" : 35,
        "order_by" : "most_liked"
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
              } else if (filteredObject.resource['order_by'] === "most_liked") {
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
            if (filteredObject.resource.hasOwnProperty("excluded_minimum_average_ranking")) {
              delete filteredObject.resource["excluded_minimum_average_ranking"]
            }
            if (filteredObject.resource.hasOwnProperty("excluded_maximum_average_ranking")) {
              delete filteredObject.resource["excluded_maximum_average_ranking"]
            }
            break;
          }
          case 10: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 33
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
            break;
          }
          case 11: {
            filteredObject.resource["minimum_average_ranking"] = 34
            filteredObject.resource["maximum_average_ranking"] = 67
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
            break;
          }
          case 12: {
            filteredObject.resource["minimum_average_ranking"] = 68
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
            break;
          }
          case 21: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 67
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
            break;
          }
          case 22: {
            filteredObject.resource["excluded_minimum_average_ranking"] = 34
            filteredObject.resource["excluded_maximum_average_ranking"] = 67
            if (filteredObject.resource.hasOwnProperty("minimum_average_ranking")) {
              delete filteredObject.resource["minimum_average_ranking"]
            }
            if (filteredObject.resource.hasOwnProperty("maximum_average_ranking")) {
              delete filteredObject.resource["maximum_average_ranking"]
            }
            break; 
          }
          case 23: {
            filteredObject.resource["minimum_average_ranking"] = 34
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
            break; 
          }
          case 33: {
            filteredObject.resource["minimum_average_ranking"] = 0
            filteredObject.resource["maximum_average_ranking"] = 100
            filteredObject.resource["excluded_minimum_average_ranking"] = null
            filteredObject.resource["excluded_maximum_average_ranking"] = null
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
          if (filteredObject.resource.hasOwnProperty("search")) {
            delete filteredObject.resource.search
          }
        break;
      }
      case "nav" : {
        for (let i = 0; i < 17; i++) {

          switch(i) {
            case 2 : {
              if (values ===2) {
                filteredObject.resource["minimum_likes"] = 0
                filteredObject.resource["minimum_is_recommended"] = 0
                filteredObject.resource["minimum_average_rating"] = 0
                filteredObject.resource["limit"] = 45
                filteredObject.resource["order_by"] = "lowest_ranked"
              } else if (filteredObject.resource.hasOwnProperty('minimum_likes') ||  filteredObject.resource.hasOwnProperty('minimum_is_recommended') || filteredObject.resource.hasOwnProperty('limit')) {
                if (filteredObject.resource.hasOwnProperty('minimum_likes')) {
                  delete filteredObject.resource.minimum_likes
                }
                if (filteredObject.resource.hasOwnProperty('minimum_is_recommended')) {
                  delete filteredObject.resource.minimum_is_recommended
                }
                if (filteredObject.resource.hasOwnProperty('limit')) {
                  delete filteredObject.resource.limit
                }
                if (filteredObject.resource.hasOwnProperty('minimum_average_rating')) {
                  delete filteredObject.resource.minimum_average_rating
                }
                if (filteredObject.resource["order_by"] === "lowest_ranked") {
                  delete filteredObject.resource["order_by"]
                }
              }
            }
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
      case "search": {
        if (type === "search") {
          filteredObject = {resource: {search: values[1]}, user: {profile_id: values[0]}};
        } else if (filteredObject.resource.hasOwnProperty("search")) {
          delete filteredObject.resource.search
        }
        break;
      }
      case "refresh" : 
        break;
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

    if (icon) {
      updateDatabase([])
      setLoading(true)
    } 

    if (type === "refresh") {
      updateDatabase([])
    }
    // TODO-- Link Server Code
    return axios.post(`http://localhost:8080/api/resources/options`, filteredObject)
    .then(response => {
      // console.log(response.data)
      
      updateDatabase(helperfunc(response.data)) 

      if(counter) {
        setResourceCount(response.data.length)
        setShowMoreCards(8)
        console.log("TRIGGERED")
      } else {
        setResourceCount(response.data.length)
      }

      setTimeout(() => {
        if (icon) {
          setLoading(false)
        }
      }, 1000)
    })
    .catch(error => {
      console.error(error);
      setFilterError(true)
      setTimeout(() => {
        setFilterError(false)
      }, 1200)
    });
  }

  return (
    <FilterContext.Provider
      value={{
        filterData,
        myFilteredData,
        totalkeys,
        parsedBsampledata,
        parsedAsampledata,
        parsedIsampledata,
        setparsedAsampledata,
        setparsedBsampledata,
        setparsedIsampledata,
        pageA,
        pageB,
        pageI,
        setPageA,
        setPageB,
        setPageI,
        setData,
        filterError, 
        setFilterError,
        handlefilterError
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};