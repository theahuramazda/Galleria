/// <reference path="../../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.directive("galleriaMenuList", GalleriaMenuListDirective);

	function GalleriaMenuListDirective()
	{
		return {
			restrict: "E",
			templateUrl: "/angular-app/directives/galleria.directive.menulist.html"
		};
	}
})()