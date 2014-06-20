var IG_Weather = {
  env: "dev"
};

(function(options){
  if (options.prod) {

    options.weatherUrl = "api.openweathermap.org/data/2.5/weather?q=<city>,uk";

  }
  else {

    options.weatherUrl = "api.openweathermap.org/data/2.5/weather?q=<city>,uk";

  }
})(IG_Weather),
