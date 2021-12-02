const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=5f668c5bf914612ecea95ee3714c6492&query=Los%20Angeles&units=f";

const geo_url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Bhaktapur.json?access_token=pk.eyJ1IjoiYmluYXlhLWJhanJhY2hhcnlhIiwiYSI6ImNrd29kYmowNTAxcXoybm8yYmE5eDF3d3YifQ.2_GGwVl4cyRoQzz86H1RCA&limit=1";

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

request({ url: geo_url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Location Services");
  } else if (response.body.features.length === 0) {
    console.log(
      "Unable to find the geolocation of the required location !!!!!"
    );
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];

    console.log(latitude, longitude);
  }
});
