const request = require("request-promise-native");

// @param {String} token - String containing your API Key
// @param {String} url - Encoded URI string container the URI you're targeting
// @param {Integer} width - Integer indicating the width of your target render
// @param {Integer} height - Integer indicating the height of your target render
// @param {String} output - String specifying the output format, "image" or "json"
const screenshot = (url) => {
  require('dotenv').config();

  // Construct the query params and URL
  const {TOKEN} = process.env;
  const width = 1920;
  const height = 1080;
  const output = "json";
  const query = "https://shot.screenshotapi.net/screenshot";
  query += `?token=${TOKEN}&url=${url}&width=${width}&height=${height}&output=${output}`;

  return request.get(
    { url: query, encoding: "binary" },
    (err, response, body) => {
      return body;
    }
  );
};
module.exports = { screenshot };
