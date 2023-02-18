//--------------------------------------------
// returns true or false
export const isYoutubeUrl = (url) => {
  return (url.indexOf("youtube.com") !== -1 || url.indexOf("youtu.be") !== -1);
}
/* sample usage:
const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
console.log(isYoutubeUrl(youtubeUrl)); // Outputs true

const nonYoutubeUrl = "https://www.google.com";
console.log(isYoutubeUrl(nonYoutubeUrl)); // Outputs false
*/
//--------------------------------------------

//--------------------------------------------
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
//--------------------------------------------


//--------------------------------------------
  // truncate long text
export const truncateText = (text, limit) => {
  if (text.length > limit) {
      return text.substring(0, limit) + '...';
  } else {
      return text;
  }
}
//--------------------------------------------

//--------------------------------------------
// Random Number Generator
export const randomNumber = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//--------------------------------------------

//--------------------------------------------
// Random Colour for icon thumbnail
export function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);

  return color;
}
//--------------------------------------------

//--------------------------------------------
// Assign Color Based on Stage
export const colorGenerator = (stage) => {
  const beginner = "#00e676"
  const intermediate = "#03a9f4"
  const advanced = "#e53935"

  if(stage === null) 
    return "default"

  if (stage <= 33 && stage >= 0)
    return beginner;

  if (stage > 33 && stage < 68)
    return intermediate

  if (stage >= 68 && stage <= 100)
    return advanced

  return 'default'
}
//--------------------------------------------



//--------------------------------------------
// extractTLD
// ** UNTESTED **
export const extractDomain = (url) => {
  const hostname = new URL(url).hostname;
  const parts = hostname.split('.');
  const domain = parts.slice(parts.length - 2, parts.length - 1)[0];
  const extn = parts[parts.length - 1];
  return ('http://'+ domain + '.' + extn);
}
// const fullURL = "https://www.example.com/path/to/page";
// console.log(extractDomain(fullURL));
// output: example.com
//--------------------------------------------


//--------------------------------------------
// isURLValid('http://www.example.com')
// verify a URL by actually fetching it..needs to get a 2xx response
export const isURLValid = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
// const url = "https://www.example.com";
// isURLValid(url).then(result => {
//   console.log(result); // Output: true or false
// });
//--------------------------------------------

//--------------------------------------------
export const getdata = (data, stage) => {
  let tmpArray = []
  data.forEach( element => {
    // if (stage === "beginner") {
    //   if (element.stage > 0 && element.stage <= 33 ) {
        tmpArray.push(element)
    //   }
    // } else if (stage === "intermediate") {
    //   if (element.stage > 33  && element.stage < 68 ) {
    //     tmpArray.push(element)
    //   }
    // } else if (stage === "advanced") {
    //   if (element.stage >= 68  && element.stage <= 100 ) {
    //     tmpArray.push(element)
    //   }
    // }
  })

  // let sortedArray = []
  // // for (let x = 0; x < data.length; x++) {
  // //   if (x === 0) {
  // //     push.sortedArray(data[x])
  // //   } else {
  // //     for (let y = 0; y < sortedArray.length; y++) {
  // //       if (sortedArray.length === 1) {
  // //         return data[x] > sortedArray[0] ? sortedArray.push(data[x]) : sortedArray.splice(0, 0, data[x])
  // //       } else if (y === sortedArray.length -1) {
  // //         return data[x] > sortedArray[y] ? sortedArray.push(data[x]) : sortedArray.splice( y, 0, data[x])
  // //       } else {

  // //       }
  // //     }
  // //   }
  // data.forEach (element => {
  //   sortedArray.push
  // })

  // }
  return tmpArray
}
//--------------------------------------------


export function getKeywordScores(searchText) {
  
  const industryKeywords = [
    'developer',
    'coding',
    'programming',
    'web development',
    'software engineering',
    'tech industry',
    'IT industry',

    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Express",
    "Next.js",
    "Ember",
    "Meteor",
    "jQuery",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "Sass",
    "Less",
    "TypeScript",
    "Ruby on Rails",
    "Django",
    "Flask",
    "Spring",
    "Express.js",
    "Nest.js",
    "Adonis.js",
    "PHP",
    "ASP.NET",
    "Java",
    "Python",
    "C\\+\\+",
    "C#",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "Rust",
    "Scala",
    "SQL"
  ];
  
  //const lowercaseText = searchText.toLowerCase().replace(/[^\w\s]/gi, ''); // Remove non-alphanumeric characters
  const lowercaseText = searchText.replace(/[^\w+#]/gi, ''); // dont' strip + and #

  const scores = [];
  
  for (const keyword of industryKeywords) {
    let strippedKeyword = keyword;
    
    const keywordCount = (lowercaseText.match(new RegExp(strippedKeyword, 'gi')) || []).length;
    
    if (keywordCount > 0) {
      if(strippedKeyword === "C\\+\\+") {
        strippedKeyword = "C++";
      }
      scores.push({ keyword: strippedKeyword, score: keywordCount });
    }
  }

  // order these high to low and return
  return scores.sort((a, b) => b.score - a.score);
}
