const request = require('request');

const api = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = (breedName, callback) => {
  const search = api + breedName;

  request(search, (err, response, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      callback("Data not found. Check spelling!", null);
      return;
    }

    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};