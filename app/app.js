"use strict";

var app = angular.module("HighwayApp", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: "partials/nav.html"
	})
	.when('/highwayOne', {
		templateUrl: "partials/highway-one.html",
		controller: "highwayOneCtrl"
	})
	.when('/highwayTwo', {
		templateUrl: "partials/highway-two.html",
		controller: "highwayTwoCtrl"
	})
	.otherwise('/');
});