import React from "react";


const useStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    //backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    fontSize: "10rem",
    color: "white",
  },
};

//<Icon className={classes.icon}>{icon}</Icon>

const FancyDisplay = ({ icon }) => {
  

  return (
    <div className={useStyles.root}>
      
      <img
        src={`${icon}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${icon}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={"TODO"}
        loading="lazy"
      />
    </div>
  );
};

export default FancyDisplay;
