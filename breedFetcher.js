const request = require('request');

const arg = process.argv.slice(2);
const website = `https://api.thecatapi.com/v1/breeds/search?q=`;
const search = website + arg;

request(search, (err, response, body) => {
  if (err) {
    console.log("Error in request.");
    console.log(err);
    return;
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);


  if (!data[0]) {
    console.log("Data not found. Check spelling!");
    return;
  }

  console.log(data[0].description);
});