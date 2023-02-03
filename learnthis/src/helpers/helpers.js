// returns true or false
//
export const isYoutubeUrl = (url) => {
  return (url.indexOf("youtube.com") !== -1 || url.indexOf("youtu.be") !== -1);
}
/* sample usage:
const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(isYoutubeUrl(youtubeUrl)); // Outputs true

const nonYoutubeUrl = "https://www.google.com";
console.log(isYoutubeUrl(nonYoutubeUrl)); // Outputs false
*/

//
//
//
export const getYoutubeVideoId = (url) => {
  let videoId;
  try {
      const match = url.match(/(v=|youtu\.be\/)([^&]+)/);
      videoId = match[2];
  } catch (err) {
      console.error("Invalid YouTube URL: ", err);
  }
  return videoId;
}
// sample usage:
// const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// const videoId = getYoutubeVideoId(youtubeUrl);


  //
  // truncate long text
  //
export const truncateText = (text, limit) => {
  if (text.length > limit) {
      return text.substring(0, limit) + '...';
  } else {
      return text;
  }
}

// Random Number Generator
export const randomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random Colour for icon thumbnail
export function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}

// Assign Color Based on Stage
export const colorGenerator = (stage) => {
  const beginner = "#00e676"
  const intermediate = "#03a9f4"
  const advanced = "#e53935"

  if (stage <= 33 && stage >= 0)
    return beginner;

  if (stage > 33 && stage < 68)
    return intermediate

  if (stage >= 68 && stage <= 100)
    return advanced

  return 'default'
}

