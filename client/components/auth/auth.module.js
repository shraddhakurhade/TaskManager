'use strict';

angular.module('taskmanagerApp.auth', [
  'taskmanagerApp.constants',
  'taskmanagerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
