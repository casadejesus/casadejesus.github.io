//Definição dos módulos do projeto
var appService = angular.module('appService', []);
var appController = angular.module('appController', ['appService']);
var app = angular.module('app', ['ngRoute','appController']);

// configure our routes
	app.config(function($routeProvider,$locationProvider) {
		$routeProvider

			.when('/', {
				templateUrl : 'scripts/view/home.html',
				controller  : 'eventoController'
			})
			.when('/historia', {
				templateUrl : 'scripts/view/historia.html',
				controller  : 'eventoController'
			})
			.when('/atividades', {
				templateUrl : 'scripts/view/atividades.html',
				controller  : 'eventoController'
			})
			.when('/eventos', {
				templateUrl : 'scripts/view/outroseventos.html',
				controller  : 'eventoController'
			})
			.when('/midia', {
				templateUrl : 'scripts/view/midia.html',
				controller  : 'eventoController'
			})
			.when('/contato', {
				templateUrl : 'scripts/view/contato.html',
				controller  : 'eventoController'
			})									
			.otherwise({ redirectTo: '/' });

		$locationProvider
		.hashPrefix('!');

	});


	