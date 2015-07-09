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
					name: "Album 1",
					url: "/album/album 1/"
				},
				{
					name: "Album 2",
					url: "/album/album 2/"
				},
				{
					name: "Album 3",
					url: "/album/album 3/"
				}];

			return tempMenus;
		};
	}
})();