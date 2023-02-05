import React, { useState, useEffect } from "react";




export default function RandomAvatar() {
  const [avatarUrl, setAvatarUrl] = React.useState(null);

  React.useEffect(() => {
    let x = (Math.random())
    let url = "https://api.dicebear.com/5.x/bottts-neutral/svg?radius=50&seed=" + x;
    setAvatarUrl(url);
  }, []);

  
  return (
    <img
            src={avatarUrl}
            width="40"
            alt="bottts_avatar"
          />
  );
};