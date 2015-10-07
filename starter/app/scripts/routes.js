'use strict';

var routes = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
	  .state('home', {
	    url: '/',
	    controller: 'HomeCtrl',
	    templateUrl: 'templates/home.html'
	  })
}

angular
	.module('starter')
	.config(routes);

