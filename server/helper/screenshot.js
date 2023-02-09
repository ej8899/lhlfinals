require("dotenv").config();
const request = require("request-promise-native");

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

/*
Retrieve the title, description from the meta head of a url
*/
const retrieveTitleDescription = async (url) => {
  data = fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const obj = {};

      obj.title = doc.querySelector("head title").textContent;
      obj.description = doc
        .querySelector('head meta[name="description"]')
        .getAttribute("content");

      console.log("Title: ", obj.title);
      console.log("Description: ", obj.description);
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
  return info;
};

module.exports = { screenshot, extract };
