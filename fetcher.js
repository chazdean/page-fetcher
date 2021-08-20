const fs = require('fs');
const args = process.argv.slice(2);

const request = require('request');
request(args[0], (error, response, body) => {
  if (error || response.statusCode !== 200) {
    console.log("Error");
    return;
  }
  console.log('statusCode:', response.statusCode);
  fs.writeFile(args[1], body, 'utf8', function(err) {
    if (err) return console.log(err);
    if (!args[1].includes('html'))
      console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${args[1]}`);
  });
});