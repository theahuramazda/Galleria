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
			.when("/albums/", {
				templateUrl: "/angular-app/views/albums.html"
			})
			.when("/about/", {
				templateUrl: "/angular-app/views/about.html"
			})
			.when("/contact/", {
				templateUrl: "/angular-app/views/contact.html"
			})
			.otherwise({
				redirectTo: "/"
			});

		$locationProvider.html5Mode(true);
	}
})();