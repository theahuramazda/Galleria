/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-route.js" />
(function () {
	angular.module("GalleriaApp", ["ngRoute"])
		.config(["$routeProvider", "$locationProvider", configureRoutes]);

	function configureRoutes($routeProvider, $locationProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/angular-app/views/home.html",
				controller: "HomeController",
				controllerAs: "homeViewModel"
			})
			.otherwise({
				redirectTo: "/"
			});

		$locationProvider.html5Mode(true);
	}
})();