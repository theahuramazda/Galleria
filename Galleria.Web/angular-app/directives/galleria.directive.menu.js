/// <reference path="../../scripts/angular.js" />
(function ()
{
	angular.module("GalleriaApp")
		.controller("GalleriaMenuController", GalleriaMenuController)
		.directive("galleriaMenu", GalleriaDirective);

	function GalleriaDirective()
	{
		return {
			restrict: "E",
			templateUrl: "/angular-app/directives/galleria.directive.menu.html",
			controller: "GalleriaMenuController",
			controllerAs: "GalleriaMenuViewModel"
		};
	}

	GalleriaMenuController.$inject = ["$scope"];
	function GalleriaMenuController()
	{

	}
})()