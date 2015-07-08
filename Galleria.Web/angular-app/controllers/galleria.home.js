/// <reference path="../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.controller("HomeController", HomeController);

	// To aid minification
	HomeController.$inject = ["$scope"];

	function HomeController($scope)
	{
		var homeViewModel = this;
	}
})();