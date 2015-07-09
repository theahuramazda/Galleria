/// <reference path="../../scripts/angular.js" />
(function(){
	angular.module("GalleriaApp").controller("GalleriaAlbumListController", GalleriaAlbumListController);

	GalleriaAlbumListController.$inject = ["$scope", "$location", "albumService"];
	function GalleriaAlbumListController($scope, $location, albumService) {
		var galleriaAlbumList = this;
		galleriaAlbumList.albums = albumService.getAlbumList();

		initialise();


		/* Private Functions */

		function initialise()
		{
			// Watch for route/location changes and update the currently active album item
			$scope.$on("$locationChangeSuccess", updateCurrentAlbumItem);

			updateCurrentAlbumItem();
		}

		// Set the .locationIsCurrent property on the relevant Album item.
		// Note: Any template bound to galleriaAlbumList.albums will cause the Html to change if necessary.
		function updateCurrentAlbumItem()
		{
			/*
			var currentPath = $location.path().toLowerCase();
			// Iterate through the album list and match the album url part to the current full browser path
			galleriaAlbumList.albums.forEach(function (album) {
				album.locationIsCurrent = false;

				var albumUrl = album.url.toLowerCase();
				// Check first for the special case of root "/"
				// because the second check will always match the root Menu item with all paths
				if (albumUrl === currentPath) {
					album.locationIsCurrent = true;
				}
				else if (albumUrl !== "/") {
					album.locationIsCurrent = (currentPath.substring(0, albumUrl.length) === albumUrl);
				}
			});
			*/
		}

	}
})();