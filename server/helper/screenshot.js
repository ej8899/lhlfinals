require("dotenv").config();
const request = require("request-promise-native");
const fetch = require("node-fetch");
const { DOMParser } = require("@xmldom/xmldom");

// @param {String} token - String containing your API Key
// @param {String} url - Encoded URI string container the URI you're targeting
// @param {Integer} width - Integer indicating the width of your target render
// @param {Integer} height - Integer indicating the height of your target render
// @param {String} output - String specifying the output format, "image" or "json"
const screenshot = (url) => {
  // Construct the query params and URL
  const { TOKEN } = process.env;
  const width = 1920;
  const height = 1080;
  const output = "json";
  let query = "https://shot.screenshotapi.net/screenshot";
  query += `?token=${TOKEN}&url=${url}&width=${width}&height=${height}&output=${output}`;

  return request.get(
    { url: query, encoding: "binary" },
    (err, response, body) => {
      return body;
    }
  );
};

function getMeta(doc, metaName) {
  const metas = doc.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }
  return "";
}

/*
Retrieve the title, description from the meta head of a url
*/
const retrieveTitleDescription = async (url) => {
  data = await fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const obj = {};
      obj.title = doc.getElementsByTagName("title")[0].textContent;
      obj.description = getMeta(doc, "description");

      /*   console.log("Title: ", obj.title);
      console.log("Description: ", obj.description); */
      return obj;
    });
  return data;
};

/*
Get Title, Description, Thumbnail of a url
*/
const extract = async (url) => {
  info = await retrieveTitleDescription(url);
  info.thumbnail = await screenshot(url);
  info.thumbnail = info.thumbnail
    ? JSON.parse(info.thumbnail)["screenshot"]
    : "";
  info.url = url;
  console.log("Info extracted: ", info);
  return info;
};

/*
Get a randomize avatar
*/
const avatar = async (gender) => {
  if (!gender) {
    const ZeroOrOne = Math.random();
    ZeroOrOne ? (gender = "male") : (gender = "female");
  }
 // console.log("gender", gender);

  const url = `https://xsgames.co/randomusers/avatar.php?g=${gender}`;
  //console.log("url",url);

  const avatarURL = await fetch(url);
  //console.log("avatarURL", avatarURL.url);
  return {url: avatarURL.url};
};
module.exports = { screenshot, extract, avatar };
