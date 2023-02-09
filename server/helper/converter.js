toArray = function (data, key) {
  const array = data.map((element) => {
    return element[key];
  });
  return array;
};

toFormat = (data) => {
  const array = data.map((element) => {
    console.log('element',element);
    const obj = {};
    obj.resource={};
    obj.user = {};
    for (const [key, value] of Object.entries(element)) {
      console.log(`${key}: ${value}`);
      if (key.includes("is_") || key.includes("my_")) {
        obj.user[key] = value;
      } else if (key.includes("user_")) {
        obj.user[key.replace("user_", "")] = value;
      } else {
        console.log('resource key', key);
        obj.resource[key] = value;
      }
    }

    return obj;
  });
  return array;
};

module.exports = { toArray, toFormat };
