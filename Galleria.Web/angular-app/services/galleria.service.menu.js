/// <reference path="../../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.service("menuService", MenuService);

	function MenuService()
	{
		this.getMenuItems = function () {
			//TODO: replace with production code
			var tempMenus = [
				{
					name: "Home",
					url: "/"
				},
				{
					name: "About",
					url: "/about/"
				},
				{
					name: "Contact",
					url: "/contact/"
				}];

			return tempMenus;
		};
	}
})();