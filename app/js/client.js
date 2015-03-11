'use strict';

require('angular/angular');
require('angular-route');

var makeupsApp = angular.module('makeupsApp', ['ngRoute']);

//services
require('./services/resource_service')(makeupsApp);

//controllers
require('./makeups/controllers/makeups_controller')(makeupsApp);

//directives
require('./directives/dummy_directive')(makeupsApp);
require('./directives/create_resource_directive')(makeupsApp);
require('./makeups/directives/create_makeup_directive_one')(makeupsApp);

makeupsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/makeups', {
		templateUrl: 'templates/makeups/makeups_template.html',
		controller: 'makeupsController'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.when('/', {
		redirectTo: '/makeups'
	})
	.otherwise({
		templateUrl: '/templates/four_oh_four.html'
	});
}]);

//$routeProvider ngRoute ile birlikte geldi
//localhost:3000/#/makeups olacak artik, it loads statically served file
