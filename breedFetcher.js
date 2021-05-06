const request = require('request');

const arg = process.argv.slice(2);
const website = `https://api.thecatapi.com/v1/breeds/search?q=`;
const search = website + arg;

request(search, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  console.log("data[0]", data[0]);

  if (!data[0]) {
    console.log("Data not found. Check spelling!");
    return;
  }

  console.log(data[0].description);

});