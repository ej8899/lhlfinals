import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

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

  const login = ({email, password}, close) => {

    return axios.post('http://localhost:8080/api/user/login', { "email": email, "password": password})
    .then(response => {
      // TODO -- right now receiving only email address - want to update to first and last name
      setUser(response.data.authenticatedUser.email)
      setIsAuth(true);
      setUserid(response.data.authenticatedUser.id);
      close();
    })
    .catch(error => {
      console.error(error);
    });

  };

  const logout = () => {

    return axios.post('http://localhost:8080/api/user/logout')
    .then(response => {
      // TODO -- right now receiving only email address - want to update to first and last name
      setUser("nouser");
      setUserid(null)
      setIsAuth(false);
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

