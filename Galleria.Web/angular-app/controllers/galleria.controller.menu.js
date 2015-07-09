/// <reference path="../../scripts/angular.js" />
(function(){
	angular.module("GalleriaApp").controller("GalleriaMenuController", GalleriaMenuController);

	GalleriaMenuController.$inject = ["$scope", "$location", "menuService"];
	function GalleriaMenuController($scope, $location, menuService) {
		var galleriaMenu = this;
		galleriaMenu.menus = menuService.getMenuItems();

		initialise();


		/* Private Functions */

		function initialise()
		{
			// Watch for route/location changes and update the currently active menu item
			$scope.$on("$locationChangeSuccess", updateCurrentMenuItem);

			updateCurrentMenuItem();
		}

		// Set the .locationIsCurrent property on the relevant Menu item.
		// Note: Any template bound to galleriaMenu.menus will cause the Html to change if necessary.
		function updateCurrentMenuItem()
		{
			var currentPath = $location.path().toLowerCase();
			// Iterate throught the menu items and match the first part to the current browser path
			// For example: "/albums/" will match "/albums/album 1"
			galleriaMenu.menus.forEach(function (menu) {
				menu.locationIsCurrent = false;

				var menuUrl = menu.url.toLowerCase();
				// Check first for the special case of root "/"
				// because the second check will always match the root Menu item with all paths
				if (menuUrl === currentPath) {
					menu.locationIsCurrent = true;
				}
				else if (menuUrl !== "/"){
					menu.locationIsCurrent = (currentPath.substring(0, menuUrl.length) === menuUrl);
				}
			});
		}

	}
})();