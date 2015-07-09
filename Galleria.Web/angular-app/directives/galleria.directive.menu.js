/// <reference path="../../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.directive("galleriaMenu", GalleriaMenuDirective);

	function GalleriaMenuDirective()
	{
		return {
			restrict: "E",
			templateUrl: "/angular-app/directives/galleria.directive.menu.html"
		};
	}
})()