//MODULE
var smcSite = angular.module('smcSite', ['ngRoute', 'ngResource']);

//Routing
smcSite.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'pages/main.html'
    })
});
