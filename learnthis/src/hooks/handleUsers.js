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
  
  const [viewTitle, setViewTitle] = useState("Home");

  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("nouser");
  const [userid, setUserid] = useState(null);
  const { filterData } = useContext(FilterContext);

    //Error Signing In & Signing Up
    const [errorBlankEmail, setErrorBlankEmail] = useState(false);
    const [errorBlankPassword, setErrorBlankPassword] = useState(false);
    const [errorBlankFirstname, setErrorBlankFirstname] = useState(false);
    const [errorBlankLastname, setErrorBlankLastname] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false)
    const [errorCreateUser, setErrorCreateUser] = useState(false)


  const login = ({email, password}, close, setsampledata, sampledata, combinedData, setClearFilter, setLoading, setResourceCount, setShowMoreCards) => {

    if (!email || !password) {
    !email ? setErrorBlankEmail(true) : setErrorBlankEmail(false)
    !password ? setErrorBlankPassword(true) : setErrorBlankPassword(false)
      return
    } else {
      return axios.post('http://localhost:8080/api/user/login', { "email": email, "password": password})
      .then(response => {
        setErrorBlankEmail(false)
        setErrorBlankPassword(false)

        // TODO -- right now receiving only email address - want to update to first and last name
        return axios.get(`http://localhost:8080/api/profiles/user/${response.data.user[0].profile_id}`)
        .then(response => {
          setUser(`${response.data.profiles[0].first_name} ${response.data.profiles[0].last_name}`)
          close();
          setIsAuth(true);
          setUserid(response.data.profiles[0].id);

          filterData("signin", response.data.profiles[0].id, setsampledata, sampledata, combinedData, true, setLoading, true, setResourceCount, setShowMoreCards)
          
          setClearFilter(false)
        })
        .catch(error => {
          console.error(error);
          setErrorLogin(true)
        });
      })
      .catch(error => {
        console.error(error);
          setErrorLogin(true)
      });
    }
  };

  const createUser = ({email, password, firstname, lastname}, close, setsampledata, sampledata, combinedData, setClearFilter, setLoading, setResourceCount, setShowMoreCards) => {

    if (!email || !password || !firstname || !lastname) {
    !email ? setErrorBlankEmail(true) : setErrorBlankEmail(false)
    !password ? setErrorBlankPassword(true) : setErrorBlankPassword(false)
    !firstname ? setErrorBlankFirstname(true) : setErrorBlankFirstname(false)
    !lastname ? setErrorBlankLastname(true) : setErrorBlankLastname(false)
      return
    } else {
      return axios.post('http://localhost:8080/api/user', { "email": email, "password": password})
      .then(response => {
        setErrorBlankEmail(false)
        setErrorBlankPassword(false)
        setErrorBlankFirstname(false)
        setErrorBlankLastname(false)
        // console.log(response.data)

        // TODO -- right now receiving only email address - want to update to first and last name
        return axios.post("http://localhost:8080/api/profiles", {user_id : response.data.createdUser.id, "first_name" : firstname, "last_name": lastname})
        .then(response => {
          // console.log(response.data)
          setUser(`${response.data.createdProfile.first_name} ${response.data.createdProfile.last_name}`)
          close();
          setIsAuth(true);
          setUserid(response.data.createdProfile.user_id);

          filterData("signin", response.data.createdProfile.id, setsampledata, sampledata, combinedData, true, setLoading, true, setResourceCount, setShowMoreCards)
          
          setClearFilter(false)
        })
        .catch(error => {
          console.error(error);
          setErrorCreateUser(true)
        });
      })
      .catch(error => {
        console.error(error);
        setErrorCreateUser(true)
      });
    }
  };

  const logout = (setsampledata, sampledata, combinedData, setClearFilter, setLessonTrue, setSelectedIndex, reset, setLoading, setResourceCount, setShowMoreCards) => {

    return axios.post('http://localhost:8080/api/user/logout')
    .then(response => {
      // TODO -- right now receiving only email address - want to update to first and last name
      setUser("nouser");
      setUserid(null)
      setIsAuth(false);
      setClearFilter(false)
      filterData("signin", null, setsampledata, sampledata, combinedData, true, setLoading, true, setResourceCount, setShowMoreCards)
      setLessonTrue(false)
      setSelectedIndex(false)
      reset()
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
        errorBlankEmail, 
        setErrorBlankEmail,
        errorBlankPassword,
        setErrorBlankPassword,
        errorLogin,
        setErrorLogin,
        errorBlankFirstname,
        errorBlankLastname,
        setErrorBlankFirstname,
        setErrorBlankLastname,
        createUser,
        setErrorCreateUser,
        errorCreateUser,

        viewTitle,
        setViewTitle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

