const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=5f668c5bf914612ecea95ee3714c6492&query=Los%20Angeles&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Please connect to internet ");
  } else if (response.body.error) {
    console.log("No location Found");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". it is currently " +
        response.body.current.temperature +
        " degree. There is " +
        response.body.current.precip +
        ` % chance to rain`
    );
  }
});
