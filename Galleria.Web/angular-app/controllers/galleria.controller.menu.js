/// <reference path="../../scripts/angular.js" />
(function(){
	angular.module("GalleriaApp")
		.controller("GalleriaMenuController", GalleriaMenuController);

	GalleriaMenuController.$inject = ["$scope", "menuService"];
	function GalleriaMenuController($scope, menuService) {
		var galleriaMenu = this;

		//TODO: replace with service
		var tempVariable = ["Menu 1", "Menu 2", "Menu 3"]

		galleriaMenu.Menus = menuService.getMenuItems();
	}
})();