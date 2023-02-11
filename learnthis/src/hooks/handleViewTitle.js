import React, { createContext, useState } from 'react';


export const ViewTitle = createContext();

export const ViewProvider = ({ children }) => {
  const [viewTitle, setViewTitle] = useState("test");
  
  return (
    <ViewTitle.Provider
      value={{
        viewTitle,
        setViewTitle
      }}
    >
      {children}
    </ViewTitle.Provider>
  );
};

