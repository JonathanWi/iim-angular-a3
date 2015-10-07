'use strict';

angular
  .module('starter', [
    'ct.ui.router.extras',
    'ui.router',
    'ui.bootstrap',
    'starter.controllers',
    'starter.directives',
    'starter.services',
    'starter.constants'
  ]).run(function() {

  });

var run = function ($rootScope) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.log('stateChangeStart');
  });
};