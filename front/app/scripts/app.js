'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
