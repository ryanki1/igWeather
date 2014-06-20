"use strict";

angular.module("sharedModule")
	.factory("weatherService", [
		function(){
			var srv = {
          getWeather: function(city){
          }
			}
			return srv;
		}
	]) 