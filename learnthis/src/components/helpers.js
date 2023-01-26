
//
// returns true or false
//
function isYoutubeUrl(url) {
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
function getYoutubeVideoId(url) {
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


function showAbout() {
  zmodalUpdater(updateZModal, zmodalData, modalAboutMessage({clickFunction: showReleaseNotes}));
}
function showReleaseNotes() {
  zmodalUpdater(updateZModal, zmodalData, modalReleaseNotes());
}
function showPrivacy() {
  zmodalUpdater(updateZModal, zmodalData, modalPrivacyPolicy());
}