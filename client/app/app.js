'use strict';

angular.module('taskmanagerApp', [
  'taskmanagerApp.auth',
  'taskmanagerApp.admin',
  'taskmanagerApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
