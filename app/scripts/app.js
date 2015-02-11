'use strict';

/**
 * @ngdoc overview
 * @name webdevjobsApp
 * @description
 * # webdevjobsApp
 *
 * Main module of the application.
 */
var app = angular.module('webdevjobsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://webdevjobs.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // .when('#', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl'
      // })
      .when('/postjob', {
        templateUrl: 'views/postjob.html',
        controller: 'PostJobCtrl'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      // .when('/register', {
      //   templateUrl: 'views/register.html',
      //   controller: 'AuthController'
      // })
      .when('/job/:jobId', {
        templateUrl: 'views/job.html',
        controller: 'EditJobCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
