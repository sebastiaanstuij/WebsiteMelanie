'use strict';

/**
 * @ngdoc overview
 * @name websiteMelanieApp
 * @description
 * # websiteMelanieApp
 *
 * Main module of the application.
 */
angular
  .module('websiteMelanieApp', [
//    'ngAnimate', // this module appears to give a problem with angular-ui carousel sliding controls
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  });
