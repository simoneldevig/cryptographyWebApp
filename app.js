webApp = angular.module('WebApp', ['ngRoute', 'ui.bootstrap']);

webApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
        .when('/cipher', {
			templateUrl: '/views/cipher.html',
			controller: 'cipherController'
		})
        .when('/vigenere', {
			templateUrl: '/views/vigenere.html',
			controller: function(){}
		})
        .when('/gcd', {
			templateUrl: '/views/gcd.html',
			controller: function(){}
		})
        .otherwise({
			templateUrl: '/views/homepage.html',
			controller: 'HomepageController'
		});
}]);