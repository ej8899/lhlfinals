toArray = function (data, key) {
  const array = data.map((element) => {
    return element[key];
  });
  return array;
};

module.exports = { toArray };
