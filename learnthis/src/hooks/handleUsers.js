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

export const AuthContext = React.createContext(noUser);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const loginf = async (username, password) => {
    try {
      // const response = await axios.post('http://localhost:5000/login', {
      //   username,
      //   password,
      // });

      // setUser(response.data.user);
      setUser(username);
      setIsAuth(true);
      return true;
    } catch (error) {
      return false;
    }
  };

  const logoutf = () => {
    setUser({});
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        loginf,
        logoutf,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};