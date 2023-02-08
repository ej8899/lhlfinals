import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

//---------------------------------------------------------
// Import user filter
import { FilterContext } from "../helpers/filter";
//---------------------------------------------------------

// Pulling from API - no longer needed
// const noUser = [
//   {
//   uid: 0,
//   username: "",
//   email: "",
//   password: ""
//   }
// ]

// const sampleUserData = [
//   {
//     uid: 1,
//     username: "ernie",
//     email: "ej8899@gmail.com",
//     password: "123"
//   }
// ];


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("nouser");
  const [userid, setUserid] = useState(null);
  const { filterData } = useContext(FilterContext);

  const login = ({email, password}, close, setsampledata, sampledata, combinedData, setClearFilter) => {

    return axios.post('http://localhost:8080/api/user/login', { "email": email, "password": password})
    .then(response => {
      // TODO -- right now receiving only email address - want to update to first and last name
      return axios.get(`http://localhost:8080/api/profiles/user/${response.data.authenticatedUser.id}`)
      .then(response => {
        setUser(`${response.data.profiles[0].first_name} ${response.data.profiles[0].last_name}`)
        close();
        setIsAuth(true);
        setUserid(response.data.profiles[0].id);

        filterData("signin", response.data.profiles[0].id, setsampledata, sampledata, combinedData)
        
        setClearFilter(false)
      })
      .catch(error => {
        console.error(error);
      });
    })
    .catch(error => {
      console.error(error);
    });

  };

  const logout = (setsampledata, sampledata, combinedData, setClearFilter, setLessonTrue, setSelectedIndex) => {

    return axios.post('http://localhost:8080/api/user/logout')
    .then(response => {
      // TODO -- right now receiving only email address - want to update to first and last name
      setUser("nouser");
      setUserid(null)
      setIsAuth(false);
      setClearFilter(false)
      filterData("signin", null, setsampledata, sampledata, combinedData)
      setLessonTrue(false)
      setSelectedIndex(false)
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        userid,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

