'use strict';

var app = angular.module('app', [
	'ui.router', 
	'ngResource', 
	'app.services',
	'app.filters',
	'app.controllers'
]);


app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url : '/',
				templateUrl : 'partials/home.html',
				controller : 'HomeController'
			})
			.state('pagetwo', {
				url : '/pagetwo',
				templateUrl : 'partials/pagetwo.html',
				controller : 'PageTwoController'
			})
			.state('tasks', {
				url : '/tasks',
				templateUrl : 'partials/tasks.html',
				controller : 'TasksController'
			});
	}
]);