import React, { useState, useEffect } from "react";




export default function RandomAvatar(props) {
  
  return (
    <img
            src={props.url}
            width="40"
            alt="bottts_avatar"
          />
  );
};