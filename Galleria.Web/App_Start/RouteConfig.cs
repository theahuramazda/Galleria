using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Galleria.Web
{
	public class RouteConfig
	{
		public static void RegisterRoutes(RouteCollection routes)
		{
			routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

			// Passes all routes to the HomeController.
			// AngularJS will handle the routing on the client side.
			//TODO: Add definition for Admin when that code is required
			routes.MapRoute(
				name: "Root",
				url: "{*.}",
				defaults: new { controller = "Home", action = "Index"});
		}
	}
}

