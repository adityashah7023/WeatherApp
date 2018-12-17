const request = require("request");
const url = require("url");

exports.getWeather = function (req, res) {
  const path = url.parse(req.url).path;
  return callWeatherApi(path, (err, response, body) => {
    if(err){
      return res.status(500).send('Something went wrong!');
    }
    else if(response.statusCode == 200)
      return res.status(response.statusCode).json(JSON.parse(body));
    else
      return res.status(response.statusCode).send(body);
  });
}

var callWeatherApi = (path, callback) => {
  const option = {
    uri: `https://api.openweathermap.org/data/2.5/${path}`,
    method: "GET",
    headers: {
      "x-api-key": "df1fa6fe2aa3f422133d569362fcce2f"
    }
  }
  return request(option, callback);
}
