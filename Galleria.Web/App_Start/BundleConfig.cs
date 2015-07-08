using System.Web;
using System.Web.Optimization;

namespace Galleria.Web
{
	public class BundleConfig
	{
		// For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{
			/* JavaScript bundles */
			bundles.Add(new ScriptBundle("~/bundles/angular").Include(
				"~/Scripts/angular.js",
				"~/Scripts/angular-route.js"));

			// The Angular app for normal visitors
			bundles.Add(new ScriptBundle("~/bundles/app/default")
				.Include(
					"~/angular-app/galleria.app.default.js",
					"~/angular-app/controllers/*.js",
					"~/angular-app/directives/*.js"));

			//TODO: create bundle for Admin


			/* CSS/Style bundles */
			bundles.Add(new StyleBundle("~/styles/").Include("~/styles/*.css"));
		}
	}
}
