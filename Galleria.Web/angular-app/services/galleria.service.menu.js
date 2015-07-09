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
					url: "/",
					locationIsCurrent: false
				},
				{
					name: "Albums",
					url: "/albums/",
					locationIsCurrent: false
				},
				{
					name: "About",
					url: "/about/",
					locationIsCurrent: false
				},
				{
					name: "Contact",
					url: "/contact/",
					locationIsCurrent: false
				}];

			return tempMenus;
		};
	}
})();