/// <reference path="../../scripts/angular.js" />
(function () {
	angular.module("GalleriaApp")
		.service("albumService", AlbumService);

	function AlbumService()
	{
		this.getAlbumList = function () {
			//TODO: replace with production code
			var tempAlbumList = [
				{
					name: "Album 1",
					url: "/album 1/",
					locationIsCurrent: false
				},
				{
					name: "Album 2",
					url: "/album 2/",
					locationIsCurrent: false
				},
				{
					name: "Album 3",
					url: "/album 3/",
					locationIsCurrent: false
				},
				{
					name: "Album 4",
					url: "/album 4/",
					locationIsCurrent: false
				}];

			return tempAlbumList;
		};
	}
})();