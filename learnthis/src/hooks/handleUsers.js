import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const noUser = [
  {
  uid: 0,
  username: "",
  email: "",
  password: ""
  }
]

const sampleUserData = [
  {
    uid: 1,
    username: "ernie",
    email: "ej8899@gmail.com",
    password: "123"
  }
];


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("nouser");
  const [userid, setUserid] = useState("0");

  const login = async (username, password) => {
    try {
      // const response = await axios.post('http://localhost:5000/login', {
      //   username,
      //   password,
      // });

      // setUser(response.data.user);
      setUser("ernie")
      setIsAuth(true);
      setUserid("1");
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser("nouser");
    setUserid('0')
    setIsAuth(false);
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

