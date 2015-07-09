/// <reference path="../../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.directive("galleriaAlbumList", GalleriaAlbumListDirective);

	function GalleriaAlbumListDirective()
	{
		return {
			restrict: "E",
			templateUrl: "/angular-app/directives/galleria.directive.albumlist.html"
		};
	}
})()